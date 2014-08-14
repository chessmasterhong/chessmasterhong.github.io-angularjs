define([
    'directives/module'
], function(directives) {
    'use strict';

    directives.directive('errImgSrc', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                var noImg = 'media/images/no-img.jpg';

                element.bind('error', function() {
                    if(attributes.src !== noImg) {
                        attributes.$set('src', noImg);
                    }
                });

                attributes.$observe('ngSrc', function(value) {
                    if(!value) {
                        attributes.$set('src', noImg);
                    }
                });
            }
        };
    });
});
