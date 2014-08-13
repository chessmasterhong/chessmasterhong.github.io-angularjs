/* global requirejs */

requirejs.config({
    baseUrl: './scripts/',
    paths: {
        angular: '../vendor/angular/angular.min',
        angulartics: '../vendor/angulartics/dist/angulartics.min',
        angularticsGA: '../vendor/angulartics/dist/angulartics-ga.min',
        domReady: '../vendor/requirejs-domready/domReady.min',
        ngAnimate: '../vendor/angular-animate/angular-animate.min',
        ngDialog: '../vendor/ngDialog/js/ngDialog.min',
        uiRouter: '../vendor/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        angular: { exports: 'angular' },
        angulartics: { deps: ['angular'] },
        angularticsGA: { deps: ['angular', 'angulartics'] },
        ngAnimate: { deps: ['angular'] },
        ngDialog: { deps: ['angular'] },
        uiRouter: { deps: ['angular'] }
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

    if(window.location.hostname === 'chessmasterhong.github.io') {
        angular.bootstrap(document, ['app']);
    } else {
        window.location.replace('http://chessmasterhong.github.io');
    }
});
