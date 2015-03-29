'use strict';
youToDoApp.factory('tasksService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var tasksServiceFactory = {};

    $http.get(serviceBase + 'api/account/userInfo').then(function (results) {
        return results;
    });

    var _getTasks = function () {
        return $http.get(serviceBase + 'api/tasks'+).then(function (results) {
            return results;
        });
    };

    tasksServiceFactory.getTasks = _getTasks;

    return tasksServiceFactory;

}]);