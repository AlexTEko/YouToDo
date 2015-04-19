'use strict';
youToDoApp.controller('indexController', ['$scope', '$injector', 'authService', 'tasksService', function ($scope, $injector, authService, tasksService) {

    $scope.logOut = function () {
        authService.logOut();
        $injector.get('$state').go('login');
    }

    $scope.authentication = authService.authentication;

    $scope.isUser = function () {
        //console.log($scope.authentication.role);
        if ($scope.authentication.role == "User")
            return true;
        return false;
    }

    $scope.isAdmin = function () {
        //console.log($scope.authentication.role);
        if ($scope.authentication.role == "Admin")
            return true;
        return false;
    }

    var countTasks = function () {
        if ($scope.authentication.role == "User") {
            tasksService.getTasks().then(function (results) {
                $scope.tasks = results.data.length;
                //console.log(results.data.length);
            }, function (error) {
                //alert(error.data.message);
            });
        }
    }

    countTasks();
}]);