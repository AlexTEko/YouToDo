'use strict';
youToDoApp.controller('loginController', ['$scope', '$injector', 'authService', function ($scope, $injector, authService) {

    var state = $injector.get('$state');

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.message = "";

    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {

                state.go('mytasks');

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

}]);
