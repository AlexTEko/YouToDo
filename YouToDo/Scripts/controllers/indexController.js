﻿'use strict';
youToDoApp.controller('indexController', ['$scope', '$injector', 'authService', 'tasksService', function ($scope, $injector, authService, tasksService) {

    $scope.logOut = function () {
        authService.logOut();
        $injector.get('$state').go('login');
    }

    $scope.authentication = authService.authentication;

    $scope.isUser = function () {
        //console.log($scope.authentication.role);
        if ($scope.authentication.role == "User")
            return true;
        return false;
    }
}]);