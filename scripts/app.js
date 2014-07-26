'use strict';

var mySite = angular.module('mySite', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'partials/home.partial.html',
            //controller: 'homeController',
            data: {
                pageTitle: 'Home'
            }
        });
});
