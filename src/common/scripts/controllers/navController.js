define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('navController', ['$scope', '$state', function($scope, $state) {
        $scope.isActive = function(viewState) {
            return viewState === $state.current.name.split('.')[0];
        };
    }]);
});
