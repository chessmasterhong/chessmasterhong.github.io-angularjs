define([
    'app'
], function(app) {
    'use strict';

    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: '/home/home.partial.html',
                data: { pageTitle: 'Home' }
            })
            .state('projects', {
                abstract: true,
                url: '/projects',
                template: '<div data-ui-view></div>',
                data: { pageTitle: 'Projects' }
            })
            .state('projects.list', {
                url: '',
                templateUrl: '/projects/projectList.partial.html',
                controller: 'projectListController'
            })
            .state('projects.details', {
                url: '/{projectIndex:[0-9]*}',
                templateUrl: '/projects/projectDetail.partial.html',
                controller: 'projectDetailController'
            })
            .state('resources', {
                abstract: true,
                url: '/resources',
                template: '<div data-ui-view></div>',
                data: { pageTitle: 'Resources' }
            })
            .state('resources.list', {
                url: '',
                templateUrl: '/resources/resourceList.partial.html',
                controller: 'resourceListController'
            })
            .state('resources.details', {
                url: '/{resourceIndex:[0-9]*}',
                templateUrl: '/resources/resourceDetail.partial.html',
                controller: 'resourceDetailController'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/about/about.partial.html',
                data: { pageTitle: 'About' }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/contact/contact.partial.html',
                data: { pageTitle: 'Contact' }
            })
            .state('credits', {
                url: '/credits',
                templateUrl: '/credits/credits.partial.html',
                data: { pageTitle: 'Credits' }
            })
            .state('404', {
                url: '/404',
                templateUrl: '/404.partial.html',
                data: { pageTitle: 'Page Not Found' }
            });

        $urlRouterProvider.otherwise('/404');
    }]);
});
