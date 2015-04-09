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

    var _startTask = function (task) {
        task.TaskStatus = "start";
        return $http({
            method: 'PUT',
            url: 'api/tasks/' + task.Id,
            data: task,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    var _doneTask = function (task) {
        task.TaskStatus = "done";
        return $http({
            method: 'PUT',
            url: 'api/tasks/' + task.Id,
            data: task,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    tasksServiceFactory.getTasks = _getTasks;
    tasksServiceFactory.getTask = _getTask;
    tasksServiceFactory.startTask = _startTask;
    tasksServiceFactory.doneTask = _doneTask;

    return tasksServiceFactory;

}]);