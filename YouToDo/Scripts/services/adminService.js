'use strict';
youToDoApp.factory('adminService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var adminServiceFactory = {};

    var _addRole = function (formData) {
        return $http({
            method: 'POST',
            url: 'api/Account/addmanager?name=' + formData.user,
            data: formData,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    var _delRole = function (formData) {
        return $http({
            method: 'POST',
            url: 'api/Account/removemanager?name=' + formData.manager,
            data: formData,
            headers: { 'Content-Type': 'application/json' }
        })
    };

    adminServiceFactory.addRole = _addRole;
    adminServiceFactory.delRole = _delRole;

    return adminServiceFactory;

}]);