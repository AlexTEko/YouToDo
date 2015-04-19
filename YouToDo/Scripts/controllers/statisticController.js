'use strict';
youToDoApp.controller('statisticController', ['$scope', 'statisticService', function ($scope, statisticService) {
    var getStat = function () {
        statisticService.getStat().then(function (results) {
            $scope.stat = results.data;
        }, function (error) {
            alert(error.data.message);
        });
    };

    getStat();
}]);
