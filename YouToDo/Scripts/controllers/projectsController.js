'use strict';

youToDoApp.controller('projectsController', ['$scope', '$http', '$injector', 'projectsService', function ($scope, $http, $injector, projectsService) {

    var state = $injector.get('$state');

    $scope.projects = [];
    $scope.showModalCreate = false;
    $scope.formData = {};

    var getProjects = function () {
        projectsService.getProjects().then(function (results) {
            $scope.projects = results.data;
        }, function (error) {
            //alert(error.data.message);
        });
    };

    var createProject = function () {
        projectsService.createProject($scope.formData).success(function () {
            $scope.showModalCreate = !$scope.showModalCreate;
            getProjects();
        }, function (error) {
            alert(error.data.message);
        });
    };

    $scope.createProject = function () {
        createProject(projectsService);
    };

    $scope.deleteProject = function (id) {
        if (confirm("Are you sure want to delete project?") == true) {
            projectsService.deleteProject(id).success(function () {
                getProjects();
            });
        }
    };

    $scope.addProject = function () {
        $scope.formData = {};
        $scope.showModalCreate = !$scope.showModalCreate;
    };

    $scope.viewProject = function (id) {       
        state.go('project', {id: id});
    };

    getProjects();
}]);
