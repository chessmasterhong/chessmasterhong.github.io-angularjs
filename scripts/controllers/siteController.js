'use strict';

mySite.controller('siteController', function($scope, $state) {
    $scope.siteTitle = 'Kevin Chan';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;

        if(toState.data.stylesheets && toState.data.stylesheets.length > 0) {
            $scope.stylesheets = toState.data.stylesheets;
        }
    });

    $scope.isActive = function(viewState) {
        return viewState === $state.current.name.split('.')[0];
    };
});
