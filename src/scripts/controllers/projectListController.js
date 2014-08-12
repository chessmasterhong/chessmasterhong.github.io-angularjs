define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectListController', ['$scope', 'projectsFactory', function($scope, projectsFactory) {
        $scope.projects = projectsFactory.getProjects() || [];

        var projectCount = projectsFactory.getProjectCount();
        for(var p = 0; p < projectCount; p++) {
            $scope.projects[p].projectIndex = projectCount - p - 1;
        }
    }]);
});
