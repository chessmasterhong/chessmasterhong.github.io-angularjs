define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('headController', ['$scope', function($scope) {
        $scope.siteTitle = 'Kevin Chan';

        $scope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.pageTitle = toState.data.pageTitle;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }]);
});
