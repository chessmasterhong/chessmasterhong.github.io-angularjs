define([
    'angular',
    'uiRouter',
    'ngAnimate',
    'ngDialog',
    'angulartics',
    'angulartics_ga',
    'controllers/index',
    'directives/index',
    'factories/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'angulartics',
        'angulartics.google.analytics',
        'app.controllers',
        'app.directives',
        'app.factories',
        'ngAnimate',
        'ngDialog',
        'ui.router'
    ]);
});
