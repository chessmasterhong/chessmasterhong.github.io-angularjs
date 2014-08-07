define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectListController', ['$scope', 'projectsFactory', 'ngDialog', function($scope, projectsFactory, ngDialog) {
        $scope.projects = projectsFactory.getProjects() || [];
        $scope.view = 'thumbnail';

        $scope.openDialog = function(projectIndex) {
            console.log(projectIndex)
            ngDialog.open({
                template: CONFIG.PATH.TMPL + 'dialogBox-projectList.html',
                scope: $scope
            });
        };
    }]);
});
