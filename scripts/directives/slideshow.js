define([
    'directives/module'
], function(directives) {
    'use strict';

    directives.directive('slider', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'partials/templates/slider.html',
            scope: {
                slides: '='
            },
            link: function(scope) {
                scope.currentSlideIndex = 0;

                scope.next = function() {
                    scope.currentSlideIndex = scope.currentSlideIndex < scope.slides.length - 1 ? scope.currentSlideIndex + 1 : 0;
                };

                scope.prev = function() {
                    scope.currentSlideIndex = scope.currentSlideIndex > 0 ? scope.currentSlideIndex - 1 : scope.slides.length - 1;
                };

                scope.$watch('currentSlideIndex', function() {
                    scope.slides.forEach(function(slide) {
                        slide.visible = false;
                    });
                    scope.slides[scope.currentSlideIndex].visible = true;
                });

                var timer;
                var sliderTimer = function() {
                    timer = $timeout(function() {
                        scope.next();
                        timer = $timeout(sliderTimer, 6000);
                    }, 6000);
                };
                sliderTimer();

                scope.$on('$destroy', function() {
                    $timeout.cancel(timer);
                });
            }
        };
    }]);
});
