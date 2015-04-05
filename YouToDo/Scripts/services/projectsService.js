'use strict';
youToDoApp.factory('projectsService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var projectsServiceFactory = {};

    var _getProjects = function () {

        return $http.get('api/projects').then(function (results) {
            return results;
        });       
    };

    projectsServiceFactory.getProjects = _getProjects;

    return projectsServiceFactory;

}]);