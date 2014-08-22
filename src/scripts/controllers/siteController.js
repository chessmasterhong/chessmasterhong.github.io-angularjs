define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('siteController', [function() {
        var siteUrls = document.getElementsByTagName('a'),
            paths = ['projects', 'resources', 'about', 'contact', 'credits'];

        for(var i = 0; i < siteUrls.length; i++) {
            var path = siteUrls[i].href.match(/.*:\/\/[a-z0-9\-.]+(:[0-9]+)?\/(.*)/)[2];
            if(paths.indexOf(path) >= 0) {
                siteUrls[i].href = '/#/' + path;
            }
        }
    }]);
});
