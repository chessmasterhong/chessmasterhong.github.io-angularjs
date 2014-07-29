define([
    'angular',
    'uiRouter',
    './controllers/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'ui.router'
    ]);
});
