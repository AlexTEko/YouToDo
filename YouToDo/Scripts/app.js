'use strict';

var youToDoApp = angular.module('YouToDoApp', ['ui.router', 'LocalStorageModule']);

youToDoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
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
        .state('newProject', {
            url: '/newProject',
            templateUrl: 'partial/partial-newProject.html',
            controller: 'newProjectController'
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
