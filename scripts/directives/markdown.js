/* global Showdown */

'use strict';

mySite.directive('markdown', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.html(new Showdown.converter().makeHtml(element.text()));
        }
    };
});
