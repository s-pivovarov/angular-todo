function AppController($scope, $http) {
    $scope.todos = [];
    $scope.loader = true;

    $http.get('src/data/todos.json')
        .then(function (res) {
            $scope.todos = res.data.todos;
            $scope.loader = false;
        });
}

var App = angular.module('my-app', ['todoList'])
    .controller('AppCtrl', ['$scope', '$http', AppController]);

App.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);