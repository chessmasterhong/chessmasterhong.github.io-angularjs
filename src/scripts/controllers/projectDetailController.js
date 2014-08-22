define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectDetailController', ['$scope', '$state', 'projectsFactory', function($scope, $state, projectsFactory) {
         $scope.projects = [];
         $scope.project = {};
         $scope.project.slides = [{}];

         projectsFactory.getProjects()
            .success(function(response) {
                $scope.projects = response;

                var project = $scope.projects[$scope.projects.length - parseInt($state.params.projectIndex) - 1];

                if(project) {
                    $scope.project = project;
                } else {
                    $state.go('404');
                }
            });
    }]);
});
