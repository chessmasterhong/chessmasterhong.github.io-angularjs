'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src('./scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});
