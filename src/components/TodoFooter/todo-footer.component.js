angular.module('todoFooter')
    .component('todoFooter', {
        templateUrl: 'src/components/TodoFooter/todo-footer.template.html',
        controller: function TodoFooterController() {
            var ctrl = this;

            this.$onInit = function () {
                ctrl.filter = ctrl.filters.all;
            };

            this.onSetFilter = function (filter) {
                ctrl.filter = filter;
                ctrl.onEditFilter({ filter: filter });
            };

            this.setClassFilter = function (filter) {
                if(ctrl.filter === filter) {
                    return 'todo-footer__btn_active';
                }

                return '';
            }
        },
        bindings: {
            filters: '<',
            count: '<',
            onEditFilter: '&'
        }
    });