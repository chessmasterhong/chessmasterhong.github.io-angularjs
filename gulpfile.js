'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    requirejs = require('requirejs'),
    webserver = require('gulp-webserver');

gulp.task('lint', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(require('jshint-stylish')));
});

gulp.task('requirejs', ['lint'], function() {
    requirejs.optimize({
        baseUrl: './src/scripts/',
        out: './scripts/site.min.js',
        mainConfigFile: './src/scripts/main.js',
        include: 'main',
        insertRequire: ['main'],
        wrap: true,
        preserveLicenseComments: false
    }, function() {
        return 0;
    }, function(err) {
        console.log(err);
        return 1;
    });
});

gulp.task('image', function() {
    return gulp.src('./src/media_original/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./src/media/images/'));
});

gulp.task('webserver-dev', function() {
    gulp.src('./src/')
        .pipe(webserver({
            host: '127.0.0.1',
            port: 8080,
            livereload: true
        }));
});
