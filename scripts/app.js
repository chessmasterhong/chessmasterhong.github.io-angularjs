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
            abstract: true,
            url: '/projects',
            template: '<div data-ui-view></div>'
        })
        .state('projects.list', {
            url: '',
            templateUrl: 'partials/projectList.partial.html',
            controller: 'projectListController',
            data: {
                pageTitle: 'Projects',
                stylesheets: ['styles/projects.css']
            }
        })
        .state('projects.details', {
            url: '/{projectId:[0-9]{1,2}}',
            templateUrl: 'partials/projectDetail.partial.html',
            controller: 'projectDetailController',
            data: {
                pageTitle: 'Projects',
                stylesheets: []
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
        })
        .state('creidts', {
            url: '/credits',
            templateUrl: 'partials/credits.partial.html',
            //controller: 'creditsController',
            data: {
                pageTitle: 'Credits'
            }
        });
});
