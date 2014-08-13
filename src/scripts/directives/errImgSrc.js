define([
    'directives/module'
], function(directives) {
    'use strict';

    directives.directive('errImgSrc', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                attributes.$observe('ngSrc', function(value) {
                    if(!value) {
                        attributes.$set('src', 'media/images/no-img.jpg');
                    }
                });
            }
        };
    });
});
