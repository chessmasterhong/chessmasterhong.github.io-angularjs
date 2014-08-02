define([
    'angular',
    'uiRouter',
    'ngAnimate',
    'ngDialog',
    'controllers/index',
    'directives/index'
    //'factories/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        //'app.factories',
        'ngAnimate',
        'ngDialog',
        'ui.router'
    ]);
});
