define([
    'controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('siteController', [function() {
        var siteUrls = document.getElementsByTagName('a');
        for(var i = 0; i < siteUrls.length; i++) {
            siteUrls[i].href = '/#/' + siteUrls[i].href.match(/.*:\/\/[a-z0-9\-.]+(:[0-9]+)?\/(.*)/)[2];
        }
    }]);
});
