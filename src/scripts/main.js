/* global requirejs */

requirejs.config({
    baseUrl: './scripts/',
    paths: {
        angular: '../vendor/angular/angular.min',
        domReady: '../vendor/requirejs-domready/domReady.min',
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
    'config/routes',
    'config/config'
], function(require, angular, document) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
