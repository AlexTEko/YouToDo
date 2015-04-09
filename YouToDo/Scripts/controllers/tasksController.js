'use strict';
youToDoApp.controller('tasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
    $scope.tasks = [];
    $scope.showModalTask = false;

    $scope.getTasks = function () {
        tasksService.getTasks().then(function (results) {
            $scope.tasks = results.data;
        }, function (error) {
            //alert(error.data.message);
        });
    }

    $scope.isAssigned = function (index) {
        if ($scope.tasks[index].TaskStatus == "assigned")
            return true;
        return false;
    }

    $scope.isStart = function (index) {
        if ($scope.tasks[index].TaskStatus == "start")
            return true;
        return false;
    }

    $scope.openTask = function (index) {
        $scope.task = $scope.tasks[index];
        $scope.showModalTask = !$scope.showModalTask;
    }

    $scope.startTask = function (task) {
        tasksService.startTask(task).then(function (results) {
            $scope.getTasks();
        }, function (error) {
            //alert(error.data.message);
        });
    }

    $scope.doneTask = function (task) {
        tasksService.doneTask(task).then(function (results) {
            $scope.getTasks();
        }, function (error) {
            //alert(error.data.message);
        });
    }

    $scope.getTasks();
    //setInterval($scope.getTasks, 5000);
}]);
