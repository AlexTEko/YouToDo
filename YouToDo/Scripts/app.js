'use strict';

var youToDoApp = angular.module('YouToDoApp', ['ui.router', 'LocalStorageModule', 'angular-loading-bar', 'datePicker']);

youToDoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/mytasks');
    $stateProvider
        .state('mytasks', {
            url: '/mytasks',
            templateUrl: 'partial/partial-mytasks.html',
            controller: 'tasksController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partial/partial-login.html',
            controller: 'loginController'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'partial/partial-projects.html',
            controller: 'projectsController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'partial/partial-register.html',
            controller: 'signupController'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'partial/partial-users.html',
            controller: 'usersController'
        })
        .state('project', {
            url: '/project/:id',
            templateUrl: 'partial/partial-project.html',
            controller: 'projectController'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'partial/partial-admin.html',
            controller: 'adminController'
        })
        .state('statistic', {
            url: '/statistic',
            templateUrl: 'partial/partial-statistic.html',
            controller: 'statisticController'
        });
});

// var serviceBase = 'localhost:30000';
var serviceBase = 'http://youtodo.azurewebsites.net/';
youToDoApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
});

youToDoApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

youToDoApp.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


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