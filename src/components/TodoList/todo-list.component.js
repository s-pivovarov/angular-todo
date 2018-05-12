function TodoListController() {
    var ctrl = this;

    this.$onInit = function () {
        ctrl.changeCount();
        ctrl.id = Math.max.apply(null, ctrl.todos.map(function (todo) { return todo.id; }));
    };

    this.filters = {
        all: 'ALL',
        active: 'ACTIVE',
        completed: 'COMPLETED'
    };

    this.changeCount= function () {
        ctrl.count = {
            all: ctrl.todos.length,
            active: ctrl.todos.filter(function (todo) { return !todo.checked; }).length,
            completed: ctrl.todos.filter(function (todo) { return todo.checked; }).length
        };
    };

    this.active_filter = this.filters.all;
    this.setFilter = function (newFilter) {
        ctrl.active_filter = newFilter;
    };

    this.getTodo = function (todos, filter) {
        switch (filter) {
            case ctrl.filters.active:
                return todos.filter(function (item) {
                    return !item.checked;
                });

            case ctrl.filters.completed:
                return todos.filter(function (item) {
                    return item.checked;
                });

            case ctrl.filters.all:
            default:
                return todos;
        }
    };

    this.onChangeTodo = function (id) {
        ctrl.todos.forEach(function (todo) {
            if(todo.id === id)
                todo.checked = !todo.checked;
        });
        ctrl.changeCount();
    };

    this.addTodo = function (newTodo) {
        ctrl.todos.push({
            id: ++ctrl.id,
            text: newTodo,
            checked: false
        });
        ctrl.changeCount();
    };

    this.onRemoveTodo = function (id) {
        ctrl.todos = ctrl.todos.filter(function (todo) {
            return todo.id !== id;
        });
        ctrl.changeCount();
    }
}

angular.module('todoList')
    .component('todoList', {
        templateUrl: 'src/components/TodoList/todo-list.template.html',
        controller: [TodoListController],
        bindings: {
            todos: '='
        }
    });

