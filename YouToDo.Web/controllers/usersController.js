'use strict';
youToDoApp.controller('usersController', ['$scope', 'usersService', function ($scope, $usersService) {
    $scope.users = [];

    $usersService.getUsers().then(function (results) {
        $scope.users = results.data;
    }, function (error) {
        //alert(error.data.message);
    });
}]);
