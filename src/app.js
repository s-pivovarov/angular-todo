function AppController($scope, $http) {
    var cntr = this;

    $http.get('src/data/todos.json')
        .then(function (res) {
            cntr.todos = res.data.todos;
        });
}

angular.module('my-app', ['todoList'])
    .controller('AppCtrl', AppController);