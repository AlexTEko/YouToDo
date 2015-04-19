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

    getUsers();
    getManagers();

    $scope.addRole = function (name,id) {
        $('#add'+id).button('loading')
        adminService.addRole(name).then(function (result) {
            getUsers();
            getManagers();
        }, function (error) {
            alert(error.data.message);
        });
    }

    $scope.delRole = function (name, id) {
        $('#del' + id).button('loading')
        adminService.delRole(name).then(function (result) {
            getUsers();
            getManagers();
        }, function (error) {
            alert(error.data.message);
        });
    }
}]);
