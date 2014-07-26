/* global angular */
/* exported mySite */

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
                pageTitle: 'Hello World!'
            }
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'partials/projects.partial.html',
            controller: 'projectsController',
            data: {
                pageTitle: 'Projects',
                stylesheets: ['styles/projects.css']
            }
        })
        .state('resources', {
            url: '/resources',
            templateUrl: 'partials/resources.partial.html',
            //controller: 'resourcesController',
            data: {
                pageTitle: 'Resources'
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.partial.html',
            //controller: 'aboutController',
            data: {
                pageTitle: 'About'
            }
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.partial.html',
            //controller: 'contactController',
            data: {
                pageTitle: 'Contact'
            }
        });
});
