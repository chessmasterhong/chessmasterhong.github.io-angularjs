define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('resourceListController', ['$scope', 'resourcesFactory', function($scope, resourcesFactory) {
        $scope.resources = resourcesFactory.getResources() || [];
    }]);
});
