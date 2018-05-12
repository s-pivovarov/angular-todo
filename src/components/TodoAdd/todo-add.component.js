angular.module('todoAdd')
    .component('todoAdd', {
        templateUrl: 'src/components/TodoAdd/todo-add.template.html',
        controller: function TodoFooterController() {
            var ctrl = this;

            this.newTodo = '';

            this.onAdd = function () {
                if(ctrl.newTodo === '')
                    return;
                ctrl.onAddTodo({newTodo: ctrl.newTodo});
                ctrl.newTodo = '';
            };

            this.onEnterAdd = function (e) {
                if(e.keyCode === 13)
                    ctrl.onAdd();
            }
        },
        bindings: {
            onAddTodo: '&'
        }
    });