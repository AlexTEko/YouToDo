'use strict';
youToDoApp.factory('newProjectService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var newProjectServiceFactory = {};

    var _addProjects = function () {
        var data = {
            "Name": "sample string 2",
            "Description": "sample string 3",
            "ProjectLeader": "sample string 4"
        };
        return $http.post(
             '/api/projects',
             JSON.stringify(data),
             {
                 headers: {
                     'Content-Type': 'application/json'
                 }
             }
         ).success(function (data) {
             return data;
         });

    };

    newProjectServiceFactory.addProjects = _addProjects;

    return newProjectServiceFactory;

}]);