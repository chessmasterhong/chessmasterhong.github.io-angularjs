define([
    'app'
], function(app) {
    'use strict';

    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'partials/views/home.html',
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
                templateUrl: 'partials/views/projectList.html',
                controller: 'projectListController'
            })
            .state('projects.details', {
                url: '/{projectIndex:[0-9]{1,2}}',
                templateUrl: 'partials/views/projectDetail.html',
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
                templateUrl: 'partials/views/resourceList.html',
                controller: 'resourceListController'
            })
            .state('resources.details', {
                url: '/{resourceIndex:[0-9]{1,2}}',
                templateUrl: 'partials/views/resourceDetail.html',
                controller: 'resourceDetailController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'partials/views/about.html',
                data: { pageTitle: 'About' }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/views/contact.html',
                data: { pageTitle: 'Contact' }
            })
            .state('credits', {
                url: '/credits',
                templateUrl: 'partials/views/credits.html',
                data: { pageTitle: 'Credits' }
            })
            .state('404', {
                url: '/404',
                templateUrl: 'partials/views/404.html',
                data: { pageTitle: 'Page Not Found' }
            });

        $urlRouterProvider.otherwise('/404');
    }]);
});
