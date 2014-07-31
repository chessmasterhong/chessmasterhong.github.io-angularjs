define([
    'angular',
    'uiRouter',
    'ngAnimate',
    'ngDialog',
    './controllers/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'ngAnimate',
        'ngDialog',
        'ui.router'
    ]);
});
