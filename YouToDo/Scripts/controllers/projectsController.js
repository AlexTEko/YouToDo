'use strict';
youToDoApp.controller('projectsController', ['$scope', '$injector', 'projectsService', function ($scope, $injector, projectsService) {

    var state = $injector.get('$state');

    $scope.projects = [];

    projectsService.getProjects().then(function (results) {
        $scope.projects = results.data;
    }, function (error) {
        //alert(error.data.message);
    });

    $scope.addProject = function () {
        state.go('newProject');
    };
}]);
