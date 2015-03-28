'use strict';
youToDoApp.factory('projectsService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var projectsServiceFactory = {};

    var _getProjects = function () {

    //    var array = [
    //{
    //    "Id": 1,
    //    "Name": "Test1",
    //    "Description": "Test1",
    //    "ProjectLeader": 0
    //},
    //{
    //    "Id": 3,
    //    "Name": "Test3",
    //    "Description": "Test3",
    //    "ProjectLeader": 0
    //}];
        return $http.get(serviceBase + 'api/projects').then(function (results) {
            return results;
        });       
    };

    projectsServiceFactory.getProjects = _getProjects;

    return projectsServiceFactory;

}]);