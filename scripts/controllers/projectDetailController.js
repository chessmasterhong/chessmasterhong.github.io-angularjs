define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectDetailController', ['$scope', '$state', 'projectsFactory', 'ngDialog', function($scope, $state, projectsFactory, ngDialog) {
        $scope.projectDetails = '';
        $scope.viewTitle = '';
        $scope.slides = [];

        var projectIndex = parseInt($state.params.projectIndex);
        if(projectIndex !== null) {
            var project = projectsFactory.getProjects(projectIndex);
            $scope.projectDetails = project.projectDetails;
            $scope.viewTitle = project.viewTitle;
            $scope.slides = project.slides;
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
