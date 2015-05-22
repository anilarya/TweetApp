'use strict';

/**
 * @ngdoc overview
 * @name tookitakiApp
 * @description
 * # tookitakiApp
 *
 * Main module of the application.
 */
angular
  .module('tookitakiApp', ['ngAnimate','ngCookies','ui.router','ngResource',
    'ui.bootstrap','ngRoute','ngSanitize','ngTouch','kendo.directives'
  ]).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider 
    .state('/', {
      url: '/',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    }) 

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
