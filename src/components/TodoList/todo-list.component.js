angular.module('todoList')
    .component('todoList', {
        templateUrl: 'src/components/TodoList/todo-list.template.html',
        controller: function TodoListController() {
            var ctrl = this;
            var id = 0;

            this.filters = {
                all: 'ALL',
                active: 'ACTIVE',
                completed: 'COMPLETED'
            };

            this.active_filter = this.filters.all;
            this.setFilter = function (newFilter) {
                ctrl.active_filter = newFilter;
            };

            if(!this.todos)
                this.todos = [];

            

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
            }
        },
        bindings: {
            todos: '='
        }
    });