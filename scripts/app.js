define([
    'angular',
    'uiRouter',
    'ngAnimate',
    'ngDialog',
    './controllers/index',
    './directives/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'ngAnimate',
        'ngDialog',
        'ui.router'
    ]);
});
