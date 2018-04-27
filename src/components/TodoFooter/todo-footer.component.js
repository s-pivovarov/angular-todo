angular.module('todoFooter')
    .component('todoFooter', {
        templateUrl: 'src/components/TodoFooter/todo-footer.template.html',
        controller: function TodoFooterController() {
            var ctrl = this;

            this.onSetFilter = function (filter) {
                ctrl.onEditFilter({ filter: filter });
            }
        },
        bindings: {
            filters: '<',
            count: '<',
            onEditFilter: '&'
        }
    });