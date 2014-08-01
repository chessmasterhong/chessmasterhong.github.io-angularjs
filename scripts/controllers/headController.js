define([
    './module'
], function(controllers) {
    'use strict';

    controllers.controller('headController', function($scope) {
        $scope.siteTitle = 'Kevin Chan';

        $scope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.pageTitle = toState.data.pageTitle;

            if(toState.data.stylesheets && toState.data.stylesheets.length > 0) {
                $scope.stylesheets = toState.data.stylesheets;
            }
        });
    });
});
