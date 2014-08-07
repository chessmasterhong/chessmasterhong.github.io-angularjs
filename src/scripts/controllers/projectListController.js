define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectListController', ['$scope', 'projectsFactory', 'ngDialog', function($scope, projectsFactory, ngDialog) {
        $scope.projects = projectsFactory.getProjects() || [];
        $scope.view = 'thumbnail';

        $scope.openDialog = function(projectIndex) {
            $scope.projectIndex = $scope.projects.length - projectIndex - 1;
            ngDialog.open({
                template: CONFIG.PATH.TMPL + 'dialogBox-projectList.html',
                scope: $scope
            });
        };
    }]);
});
