'use strict';
youToDoApp.controller('tasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
    $scope.tasks = [];

    $scope.getTasks = function () {
        tasksService.getTasks().then(function (results) {
            $scope.tasks = results.data;
        }, function (error) {
            //alert(error.data.message);
        });
    }

    $scope.getTasks();
    setInterval($scope.getTasks, 5000);
}]);
