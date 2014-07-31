define([
    './app'
], function(app) {
    'use strict';

    return app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // ---------- Home ---------- //
            .state('home', {
                abstract: true,
                templateUrl: 'partials/views/home.html',
                data: {
                    pageTitle: 'Home'
                }
            })
            .state('home.altLinkA', {
                url: ''
            })
            .state('home.altLinkB', {
                url: '/'
            })
            .state('home.altLinkC', {
                url: '/home'
            })

            // ---------- Projects ---------- //
            .state('projects', {
                abstract: true,
                url: '/projects',
                template: '<div data-ui-view></div>',
                data: {
                    pageTitle: 'Projects',
                }
            })
            .state('projects.list', {
                url: '',
                templateUrl: 'partials/views/projectList.html',
                controller: 'projectListController',
                data: {
                    stylesheets: ['styles/project_list.css']
                }
            })
            .state('projects.details', {
                url: '/{projectIndex:[0-9]{1,2}}',
                templateUrl: 'partials/views/projectDetail.html',
                controller: 'projectDetailController'
            })

            // ---------- Resources ---------- //
            .state('resources', {
                url: '/resources',
                templateUrl: 'partials/views/resources.html',
                data: {
                    pageTitle: 'Resources'
                }
            })

            // ---------- About ---------- //
            .state('about', {
                url: '/about',
                templateUrl: 'partials/views/about.html',
                data: {
                    pageTitle: 'About'
                }
            })

            // ---------- Contact ---------- //
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/views/contact.html',
                data: {
                    pageTitle: 'Contact'
                }
            })

            // ---------- Credits ---------- //
            .state('credits', {
                url: '/credits',
                templateUrl: 'partials/views/credits.html',
                data: {
                    pageTitle: 'Credits'
                }
            })

            // ---------- Error Handling ---------- //
            .state('404', {
                url: '/404',
                templateUrl: 'partials/views/404.html',
                data: {
                    pageTitle: 'Page Not Found'
                }
            });

        $urlRouterProvider.otherwise('/404');
    });
});
