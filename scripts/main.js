'use strict';

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
], function(require, angular, router, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});
