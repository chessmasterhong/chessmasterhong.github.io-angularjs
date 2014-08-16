define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('projectListController', ['$scope', 'projectsFactory', function($scope, projectsFactory) {
        $scope.projects = [];

        projectsFactory.getProjects()
            .success(function(response) {
                $scope.projects = response;

                var projectCount = $scope.projects.length;
                for(var p = 0; p < projectCount; p++) {
                    $scope.projects[p].projectIndex = projectCount - p - 1;

                    if(window.location.hostname !== 'chessmasterhong.github.io') {
                        $scope.projects[p].thumbnail = '';

                        for(var s = 0; s < $scope.projects[p].slides.length; s++) {
                            $scope.projects[p].slides[s] = '';
                        }
                    }
                }
            });
    }]);
});
