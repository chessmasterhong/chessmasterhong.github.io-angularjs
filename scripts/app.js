/* global angular */
/* exported mySite */

'use strict';

var mySite = angular.module('mySite', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        // ---------- Home ---------- //
        .state('home', {
            url: '',
            templateUrl: 'partials/home.partial.html',
            data: {
                pageTitle: 'Hello World!'
            }
        })

        // ---------- Projects ---------- //
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
            url: '/{projectIndex:[0-9]{1,2}}',
            templateUrl: 'partials/projectDetail.partial.html',
            controller: 'projectDetailController',
            data: {
                pageTitle: 'Projects',
            }
        })

        // ---------- Resources ---------- //
        .state('resources', {
            url: '/resources',
            templateUrl: 'partials/resources.partial.html',
            data: {
                pageTitle: 'Resources'
            }
        })

        // ---------- About ---------- //
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.partial.html',
            data: {
                pageTitle: 'About'
            }
        })

        // ---------- Contact ---------- //
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.partial.html',
            data: {
                pageTitle: 'Contact'
            }
        })

        // ---------- Credits ---------- //
        .state('credits', {
            url: '/credits',
            templateUrl: 'partials/credits.partial.html',
            data: {
                pageTitle: 'Credits'
            }
        })

        // ---------- Error Handling ---------- //
        .state('404', {
            url: '/404',
            templateUrl: 'partials/404.partial.html',
            data: {
                pageTitle: 'Page Not Found'
            }
        });

    $urlRouterProvider.otherwise('/404');
});
