'use strict';
youToDoApp.controller('projectController', ['$scope', 'projectService', '$stateParams', function ($scope, projectService, $stateParams) {
    $scope.project = {};
    $scope.showModalEdit = false;
    $scope.formData = {};

    var viewProject = function ($stateParams) {
        var id = $stateParams.id;
        projectService.getProject(id).then(function (results) {
            $scope.project = results.data;
        }, function (error) {
            //alert(error.data.message);
        });
    };

    var saveProject = function () {
        projectService.saveProject($scope.formData, $scope.project.Id).success(function () {
            $scope.showModalEdit = !$scope.showModalEdit;
            viewProject($stateParams);
        }, function (error) {
            alert(error.data.message);
        });
    };

    viewProject($stateParams);

    $scope.editProject = function () {
        $scope.formData = { Name: $scope.project.Name, Description: $scope.project.Description };
        $scope.showModalEdit = !$scope.showModalEdit;
    };

    $scope.saveProject = function () {
        saveProject(projectService);
    };
}]);
