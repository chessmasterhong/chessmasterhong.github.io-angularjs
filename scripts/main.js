/* global requirejs */

requirejs.config({
    baseUrl: './scripts/',
    paths: {
        almond: '../vendor/almond/almond',
        angular: '../vendor/angular/angular',
        domReady: '../vendor/requirejs-domready/domReady',
        ngDialog: '../vendor/ngDialog/js/ngDialog.min',
        uiRouter: '../vendor/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        angular: { 'exports': 'angular' },
        ngDialog: { deps: ['angular'] },
        uiRouter: { deps: ['angular'] }
    }
});

define([
    'require',
    'angular',
    'app',
    'routes'
], function(require, angular) {
    'use strict';

    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['app']);
    });
});
