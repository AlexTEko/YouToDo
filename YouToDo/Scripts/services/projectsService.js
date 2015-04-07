'use strict';
youToDoApp.factory('projectsService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var projectsServiceFactory = {};

    var _getProjects = function () {

        return $http.get('api/projects').then(function (results) {
            return results;
        });       
    };

    var _createProject = function (formData) {
        return $http({
            method: 'POST',
            url: 'api/projects',
            data: formData,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    var _deleteProject = function (id) {
        return $http({
            method: 'DELETE',
            url: 'api/projects/' + id
        })
    };

    projectsServiceFactory.getProjects = _getProjects;
    projectsServiceFactory.createProject = _createProject;
    projectsServiceFactory.deleteProject = _deleteProject;

    return projectsServiceFactory;

}]);