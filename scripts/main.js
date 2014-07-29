requirejs.config({
    baseUrl: 'scripts',
    paths: {
        angular: '../vendor/angular/angular',
        domReady: '../vendor/domReady/ready',
        uiRouter: '../vendor/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        angular: { 'exports' : 'angular' }
    }
});

define([
    'require',
    'angular',
    'uiRouter',
    'app'
], function(require, angular, app) {
    'use strict';

    require(['domReady'], function(document) {
        angular.bootstrap(document, ['mySite'])
    });
});
