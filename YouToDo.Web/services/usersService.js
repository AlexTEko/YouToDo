'use strict';
youToDoApp.factory('usersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var usersServiceFactory = {};

    var _getUsers = function () {
        return $http.get(serviceBase + 'api/account/list').then(function (results) {
            return results;
        });
    };

    usersServiceFactory.getUsers = _getUsers;

    return usersServiceFactory;

}]);