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
                var timer;

                var sliderTimer = function() {
                    timer = $timeout(function() {
                        scope.next();
                    }, 5000);
                };
                sliderTimer();

                scope.currentSlideIndex = 0;

                scope.next = function() {
                    scope.currentSlideIndex = (scope.currentSlideIndex + 1) % scope.slides.length;
                    $timeout.cancel(timer);
                    timer = $timeout(sliderTimer, 5000);
                };

                scope.prev = function() {
                    scope.currentSlideIndex = scope.currentSlideIndex > 0 ? (scope.currentSlideIndex - 1) % scope.slides.length : scope.slides.length - 1;
                    $timeout.cancel(timer);
                    timer = $timeout(sliderTimer, 5000);
                };

                scope.set = function(slideIndex) {
                    scope.currentSlideIndex = slideIndex;
                    $timeout.cancel(timer);
                    timer = $timeout(sliderTimer, 5000);
                }

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
