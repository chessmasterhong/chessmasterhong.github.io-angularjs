'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    webserver = require('gulp-webserver');;

gulp.task('image', function() {
    return gulp.src('./media_original/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/'));
});

gulp.task('lint', function() {
    return gulp.src('./scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            host: '127.0.0.1',
            port: 8080,
            livereload: true
        }));
});
