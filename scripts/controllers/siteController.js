/* global mySite */

'use strict';

mySite.controller('siteController', function($scope, $location) {
    $scope.siteTitle = 'Kevin Chan';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;

        if(toState.data.stylesheets.length > 0) {
            $scope.stylesheets = toState.data.stylesheets;
        }
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
