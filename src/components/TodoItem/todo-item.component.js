angular.module('todoItem')
    .component('todoItem', {
        templateUrl: 'src/components/TodoItem/todo-item.template.html',
        controller: function TodoItemController() {
            var ctrl = this;

            this.changeTodoStatus = function (id) {
                ctrl.onChange({id: id});
            };

            this.removeTodo = function () {
                ctrl.onRemove({id: ctrl.id});
            }
        },
        bindings: {
            id: '<',
            text: '=',
            checked: '=',
            onChange: '&',
            onRemove: '&'
        }
    });