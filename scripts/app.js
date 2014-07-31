define([
    'angular',
    'uiRouter',
    'ngDialog',
    './controllers/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'ngDialog',
        'ui.router'
    ]);
});
