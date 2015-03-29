'use strict';
youToDoApp.controller('tasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
    $scope.tasks = [];

    tasksService.getTasks().then(function (results) {
        $scope.tasks = results.data;
    }, function (error) {
        //alert(error.data.message);
    });
}]);
