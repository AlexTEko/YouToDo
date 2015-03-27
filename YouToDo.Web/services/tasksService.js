'use strict';
youToDoApp.factory('tasksService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var tasksServiceFactory = {};

    var _getTasks = function () {
        // simulating web api response...
        return ['do this', 'do that', 'don`t do', 'well, please do', 'never do', 'ignore me'];
        /* should use this when web api is ready
        return $http.get(serviceBase + 'api/tasks').then(function (results) {
            return results;
        });
        */
    };

    tasksServiceFactory.getTasks = _getTasks;

    return tasksServiceFactory;

}]);