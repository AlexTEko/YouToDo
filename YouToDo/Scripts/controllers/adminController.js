'use strict';
youToDoApp.controller('adminController', ['$scope', 'projectService', 'adminService', '$stateParams', function ($scope, projectService, adminService, $stateParams) {

    $scope.parameters = [
        { name: "Projects", value: "5" },
        { name: "Tasks ", value: "15" }
    ];

    var getUsers = function () {
        projectService.getUsers().then(function (result) {
            $scope.users = result.data;
        }, function (error) {
            alert(error.data.message);
        });
    };

    var getManagers = function () {
        projectService.getManagers().then(function (result) {
            $scope.managers = result.data;
        }, function (error) {
            alert(error.data.message);
        });
    };

    var addRole = function () {
        //console.log('test');
        adminService.addRole($scope.formData).then(function (result) {
            getUsers();
            getManagers();
        }, function (error) {
            alert(error.data.message);
        });
    };

    var delRole = function () {
        adminService.delRole($scope.formData).then(function (result) {
            getUsers();
            getManagers();
        }, function (error) {
            alert(error.data.message);
        });
    };

    getUsers();
    getManagers();

    $scope.addRole = function () {
        addRole(adminService);
    }

    $scope.delRole = function () {
        delRole(adminService);
    }
}]);
