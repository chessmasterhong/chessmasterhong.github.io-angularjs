'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    requirejs = require('requirejs'),
    webserver = require('gulp-webserver');

gulp.task('lint', function() {
    return gulp.src('./scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(require('jshint-stylish')));
});

gulp.task('requirejs', ['lint'], function() {
    requirejs.optimize({
        baseUrl: './scripts/',
        out: './site.js',
        mainConfigFile: './scripts/main.js',
        name: 'almond',
        include: ['main'],
        insertRequire: ['main'],
        wrap: true,
        optimize: 'uglify2',
        preserveLicenseComments: false
    }, function() {
        return 0;
    }, function(err) {
        console.log(err);
        return 1;
    });
});

gulp.task('image', function() {
    return gulp.src('./media_original/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/'));
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            host: '127.0.0.1',
            port: 8080,
            livereload: true
        }));
});
