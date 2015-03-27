'use strict';

var youToDoApp = angular.module('YouToDoApp', ['ui.router', 'LocalStorageModule']);

youToDoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('mytasks', {
            url: '/mytasks',
            templateUrl: 'views/partial-mytasks.html',
            controller: 'tasksController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/partial-login.html',
            controller: 'loginController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/partial-register.html',
            controller: 'signupController'
        });
});

// var serviceBase = 'localhost:30000';
//var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
var serviceBase = 'http://youtodo.tekoone.ru:54000/';
youToDoApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
});

youToDoApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

youToDoApp.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
