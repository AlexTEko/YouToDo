'use strict';
youToDoApp.factory('adminService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var adminServiceFactory = {};

    var _addRole = function (name) {
        return $http({
            method: 'POST',
            url: 'api/Account/addmanager?name=' + name,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    var _delRole = function (name) {
        return $http({
            method: 'POST',
            url: 'api/Account/removemanager?name=' + name,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    adminServiceFactory.addRole = _addRole;
    adminServiceFactory.delRole = _delRole;

    return adminServiceFactory;

}]);