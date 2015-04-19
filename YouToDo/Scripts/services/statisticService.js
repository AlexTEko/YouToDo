'use strict';
youToDoApp.factory('statisticService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var statisticServiceFactory = {};

    var _getStat = function () {
        return $http({
            method: 'GET',
            url: 'api/statistic'
        })
    };

    statisticServiceFactory.getStat = _getStat;

    return statisticServiceFactory;

}]);