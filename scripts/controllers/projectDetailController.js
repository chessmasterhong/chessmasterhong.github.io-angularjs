define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectDetailController', ['$scope', '$state', 'projectsFactory', 'ngDialog', function($scope, $state, projectsFactory, ngDialog) {
        var project = projectsFactory.getProjects(projectsFactory.getProjectCount() - parseInt($state.params.projectIndex) - 1);
        if(project !== null) {
            $scope.urlDetails = project.urlDetails || '';
            $scope.viewTitle = project.title || '';
            $scope.slides = project.slides || [];
        } else {
            $state.go('404');
        }

        $scope.openDialog = function() {
            ngDialog.open({
                template: CONFIG.PATH.TMPL + 'dialogBox.html',
                scope: $scope
            });
        };
    }]);
});
