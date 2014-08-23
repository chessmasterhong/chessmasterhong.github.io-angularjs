define([
    'factories/module'
], function(factories) {
    'use strict';

    factories.factory('resourcesFactory', ['$http', function($http) {
        return {
            getResources: function() {
                return $http({
                        method: 'GET',
                        url: 'resources/resources.json',
                        json: true,
                        cache: true
                    });
            }
        };
    }]);
});
