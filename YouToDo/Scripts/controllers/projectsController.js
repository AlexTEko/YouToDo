'use strict';
youToDoApp.directive('modal', function () {
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
              '<div class="modal-content">' +
                '<div class="modal-header">' +
                  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                  '<h4 class="modal-title">{{ title }}</h4>' +
                '</div>' +
                '<div class="modal-body" ng-transclude></div>' +
              '</div>' +
            '</div>' +
          '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function (value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});

youToDoApp.controller('projectsController', ['$scope', '$http', '$injector', 'projectsService', function ($scope, $http, $injector, projectsService) {

    var state = $injector.get('$state');

    $scope.projects = [];
    $scope.showModal = false;
    $scope.formData = {};
 
    var getProjects = function () {
        projectsService.getProjects().then(function (results) {
            $scope.projects = results.data;
        }, function (error) {
            //alert(error.data.message);
        });
    };

    var createProject = function () {
        projectsService.createProject($scope.formData).success(function () {
            $scope.showModal = !$scope.showModal;
            getProjects();
        }, function (error) {
            alert(error.data.message);
        });
    };

    $scope.createProject = function () {
        createProject(projectsService);
    };

    $scope.deleteProject = function (id) {
        //deleteProject(projectsService, id);
        projectsService.deleteProject(id).success(function () {
            getProjects();
        });
    };

    $scope.addProject = function () {
        $scope.formData = {};
        $scope.showModal = !$scope.showModal;
    };

    getProjects();
}]);
