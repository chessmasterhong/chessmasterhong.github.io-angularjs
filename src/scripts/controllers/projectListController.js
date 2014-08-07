define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectListController', ['$scope', 'projectsFactory', function($scope, projectsFactory) {
        $scope.projects = projectsFactory.getProjects() || [];
        $scope.view = 'thumbnail';
    }]);
});
