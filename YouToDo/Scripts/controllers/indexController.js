'use strict';
youToDoApp.controller('indexController', ['$scope', '$injector', 'authService', '$rootScope', function ($scope, $injector, authService, $rootScope) {
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

    $scope.isAdmin = function () {
        //console.log($scope.authentication.role);
        if ($scope.authentication.role == "Admin")
            return true;
        return false;
    }


}]);