'use strict';
youToDoApp.factory('tasksService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

   // var userId;

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var tasksServiceFactory = {};



    

    var _getTasks = function () {
        return $http.get(serviceBase + 'api/account/userinfo').then(function (results) {
            //userId = results.data.Id;
            return $http.get(serviceBase + 'api/progress/' + results.data.Id).then(function (results) {
                return results;
            });
        });
    };

    tasksServiceFactory.getTasks = _getTasks;

    return tasksServiceFactory;

}]);