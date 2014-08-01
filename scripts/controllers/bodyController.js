define([
    './module'
], function(controllers) {
    'use strict';

    controllers.controller('bodyController', function($scope, $state) {
        $scope.isActive = function(viewState) {
            return viewState === $state.current.name.split('.')[0];
        };
    });
});
