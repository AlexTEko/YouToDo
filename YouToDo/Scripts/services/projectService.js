'use strict';
youToDoApp.factory('projectService', ['$http', 'ngAuthSettings', 'authService', function ($http, ngAuthSettings, authService) {

    var projectServiceFactory = {};

    var _getProject = function (id) {

        return $http.get('api/projects/'+id).then(function (results) {
            return results;
        });
    };

    var _saveProject = function (formData, id) {
        formData.Id = id;
        formData.ProjectLeader = authService.authentication.userName;
        return $http({
            method: 'PUT',
            url: 'api/projects/'+id,
            data: formData,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    projectServiceFactory.getProject = _getProject;
    projectServiceFactory.saveProject = _saveProject;

    return projectServiceFactory;

}]);