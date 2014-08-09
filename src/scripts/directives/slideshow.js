define([
    'directives/module'
], function(directives) {
    'use strict';

    directives.directive('slider', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: CONFIG.PATH.TMPL + 'slider.html',
            scope: {
                slides: '='
            },
            link: function(scope) {
                var timer,
                    delay = 5000;

                var sliderTimer = function() {
                    timer = $timeout(function() {
                        scope.next();
                    }, delay);
                };
                sliderTimer();

                scope.currentSlideIndex = 0;

                scope.next = function() {
                    scope.set((scope.currentSlideIndex + 1) % scope.slides.length);
                };

                scope.prev = function() {
                    scope.set(scope.currentSlideIndex > 0 ? (scope.currentSlideIndex - 1) % scope.slides.length : scope.slides.length - 1);
                };

                scope.set = function(slideIndex) {
                    scope.currentSlideIndex = slideIndex;
                    $timeout.cancel(timer);
                    timer = $timeout(sliderTimer, delay);
                };

                scope.$watch('currentSlideIndex', function() {
                    scope.slides.forEach(function(slide) {
                        slide.visible = false;
                    });
                    scope.slides[scope.currentSlideIndex].visible = true;
                });

                scope.$on('$destroy', function() {
                    $timeout.cancel(timer);
                });
            }
        };
    }]);
});
