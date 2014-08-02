/* global requirejs */

requirejs.config({
    baseUrl: './scripts/',
    paths: {
        almond: '../vendor/almond/almond',
        angular: '../vendor/angular/angular',
        domReady: '../vendor/requirejs-domready/domReady',
        ngAnimate: '../vendor/angular-animate/angular-animate.min',
        ngDialog: '../vendor/ngDialog/js/ngDialog.min',
        uiRouter: '../vendor/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        angular: { 'exports': 'angular' },
        ngAnimate: { deps: ['angular'], exports: 'angular' },
        ngDialog: { deps: ['angular'], exports: 'angular' },
        uiRouter: { deps: ['angular'], exports: 'angular' }
    }
});

define([
    'require',
    'angular',
    'domReady!',
    'app',
    'routes',
    'config'
], function(require, angular, document) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
