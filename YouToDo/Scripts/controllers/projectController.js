'use strict';
youToDoApp.controller('projectController', ['$scope', 'projectService', 'tasksService', '$stateParams', function ($scope, projectService, tasksService, $stateParams) {
    $scope.project = {};
    $scope.showModalEdit = false;
    $scope.showModalTask = false;
    $scope.showModalTaskEdit = false;
    $scope.formData = {};
    $scope.formTask = {};
    


    var viewProject = function ($stateParams) {
        var id = $stateParams.id;
        projectService.getProject(id).then(function (results) {
            $scope.project = results.data;
        }, function (error) {
            //alert(error.data.message);
        });
    };

    var saveProject = function () {
        projectService.saveProject($scope.formData, $scope.project.Id).success(function () {
            $scope.showModalEdit = !$scope.showModalEdit;
            viewProject($stateParams);
        }, function (error) {
            alert(error.data.message);
        });
    };

    var saveTask = function () {
        projectService.saveTask($scope.formTask, $scope.project.Id).success(function () {
            $scope.showModalTask = !$scope.showModalTask;
            viewProject($stateParams);
        }, function (error) {
            alert(error.data.message);
        });
    };

    var getUsers = function () {
        projectService.getUsers().then(function (result) {
            $scope.users = result.data;
            
        }, function (error) {
            alert(error.data.message);
        });
    };

    var cancelTask = function () {

    };

    viewProject($stateParams);

    $scope.editProject = function () {
        $scope.formData = { Name: $scope.project.Name, Description: $scope.project.Description };
        $scope.showModalEdit = !$scope.showModalEdit;
    };

    $scope.saveProject = function () {
        saveProject(projectService);
    };

    $scope.addTask = function () {
        $scope.formTask = {};
        getUsers(projectService);
        $scope.showModalTask = !$scope.showModalTask;
    };

    $scope.saveTask = function () {
        saveTask(projectService);
    };

    $scope.cancelTask = function (id) {
        if (confirm("Are you sure want to cancel this task?") == true) {
            projectService.cancelTask(id).then(function (result) {
                viewProject($stateParams);
            }, function (error) {
                alert(error.data.message);
            });
        }

    };

    $scope.editTask = function (id) {
        tasksService.getTask(id).then(function (result) {
            getUsers(projectService);
            $scope.formTask = result.data;
            $scope.showModalTaskEdit = !$scope.showModalTaskEdit;
        }, function (error) {
            alert(error.data.message);
        });
    }

    $scope.saveEditTask = function () {
        projectService.saveEditTask($scope.formTask, $scope.formTask.Id).then(function (result) {
            viewProject($stateParams);
            $scope.showModalTaskEdit = !$scope.showModalTaskEdit;
        }, function (error) {
            alert(error.data.message);
        });
    };
}]);
