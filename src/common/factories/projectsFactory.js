define([
    'factories/module'
], function(factories) {
    'use strict';

    factories.factory('projectsFactory', ['$http', function($http) {
        return {
            getProjects: function() {
                return $http({
                        method: 'GET',
                        url: 'data/projects.json',
                        json: true,
                        cache: true
                    });
            }
        };
    }]);
});
