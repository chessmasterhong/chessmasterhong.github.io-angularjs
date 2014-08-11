define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectDetailController', ['$scope', '$state', 'projectsFactory', 'ngDialog', function($scope, $state, projectsFactory, ngDialog) {
        var project = projectsFactory.getProjects(projectsFactory.getProjectCount() - parseInt($state.params.projectIndex) - 1);
        if(project !== null) {
            $scope.project = project;
        } else {
            $state.go('404');
        }
    }]);
});
