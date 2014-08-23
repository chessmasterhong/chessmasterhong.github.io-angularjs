/* global requirejs */

requirejs.config({
    baseUrl: './',
    paths: {
        angular: './vendor/angular/angular.min',
        angulartics: './vendor/angulartics/dist/angulartics.min',
        angularticsGA: './vendor/angulartics/dist/angulartics-ga.min',
        domReady: './vendor/requirejs-domready/domReady.min',
        ngAnimate: './vendor/angular-animate/angular-animate.min',
        ngDialog: './vendor/ngDialog/js/ngDialog.min',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router.min',

        app: './common/app',
        config: './common/config/config',
        routes: './common/config/routes',
        controllers: './common/controllers',
        factories: './common/factories',
        directives: './common/directives'
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
    'routes',
    'config'
], function(require, angular, document) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
