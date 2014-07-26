'use strict';

mySite.controller('siteController', function($scope, $location) {
    $scope.siteTitle = 'Kevin Chan';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
