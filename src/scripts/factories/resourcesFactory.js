define([
    'factories/module'
], function(factories) {
    'use strict';

    factories.factory('resourcesFactory', function() {
        var resources = [];

        return {
            getResources: function(resourceIndex) {
                if(typeof resourceIndex !== 'undefined') {
                    resourceIndex = parseInt(resourceIndex);
                    if(resourceIndex >= 0 && resourceIndex < resources.length) {
                        return resources[resourceIndex];
                    } else {
                        return null;
                    }
                } else {
                    return resources;
                }
            },

            getResourceCount: function() {
                return resources.length;
            }
        };
    });
});
