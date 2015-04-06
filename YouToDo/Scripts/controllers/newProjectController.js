'use strict';
youToDoApp.controller('newProjectController', ['$scope', 'newProjectService', function ($scope, newProjectService) {

    $scope.addProject = function () {
        newProjectService.addProject();
    };
}]);
