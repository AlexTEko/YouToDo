'use strict';
youToDoApp.controller('projectsController', ['$scope', 'projectsService', function ($scope, projectsService) {
    $scope.projects = projectsService.getProjects();
}]);
