'use strict';
youToDoApp.controller('tasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
    $scope.tasks = tasksService.getTasks();
}]);
