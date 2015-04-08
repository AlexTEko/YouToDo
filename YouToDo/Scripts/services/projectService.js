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

    var _getUsers = function () {
        return $http.get('api/account/list').then(function (results) {
            return results;
        });
    };

    var _saveTask = function (formTask, id) {
        formTask.Project = id;
        return $http({
            method: 'POST',
            url: 'api/tasks',
            data: formTask,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    var _cancelTask = function (id) {
        return $http({
            method: 'DELETE',
            url: 'api/tasks/'+id
        })
    };

    
    projectServiceFactory.getProject = _getProject;
    projectServiceFactory.saveProject = _saveProject;
    projectServiceFactory.saveTask = _saveTask;
    projectServiceFactory.getUsers = _getUsers;
    projectServiceFactory.cancelTask = _cancelTask;

    return projectServiceFactory;

}]);