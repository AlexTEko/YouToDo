'use strict';
youToDoApp.factory('tasksService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var tasksServiceFactory = {};
 
    var _getTasks = function () {
        return $http.get('api/account/userinfo').then(function (results) {
            //userId = results.data.Id;
            return $http.get('api/progress/' + results.data.Id).then(function (results) {
                return results;
            });
        });
    };

    tasksServiceFactory.getTasks = _getTasks;

    return tasksServiceFactory;

}]);