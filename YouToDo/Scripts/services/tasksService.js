'use strict';
youToDoApp.factory('tasksService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var tasksServiceFactory = {};
 
    var _getTasks = function () {
        return $http.get('api/tasks').then(function (results) {
            return results;
        });
    };

    var _getTask = function (id) {
        return $http.get('api/tasks/'+id).then(function (results) {
            return results;
        });
    };

    tasksServiceFactory.getTasks = _getTasks;
    tasksServiceFactory.getTask = _getTask;

    return tasksServiceFactory;

}]);