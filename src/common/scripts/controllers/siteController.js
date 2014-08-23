define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('siteController', ['$scope', function($scope) {
        $scope.$on('$viewContentLoaded', function() {
            var siteUrls = document.getElementsByTagName('a'),
                paths = ['projects', 'resources', 'about', 'contact', 'credits'];

            for(var i = 0; i < siteUrls.length; i++) {
                var path = siteUrls[i].href.match(/.*:\/\/[a-z0-9\-.]+(:[0-9]+)?\/(.*)/);
                if(path && paths.indexOf(path[2]) >= 0) {
                    siteUrls[i].href = '/#/' + path[2];
                }
            }
        });
    }]);
});
