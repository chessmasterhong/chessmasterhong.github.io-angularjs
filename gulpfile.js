'use strict';

var PATH = {
    BUILD: './',
    SOURCE: './src/'
}

var gulp = require('gulp'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    requirejs = require('requirejs'),
    runSequence = require('run-sequence'),
    webserver = require('gulp-webserver');

gulp.task('lint', function() {
    return gulp.src(PATH.SOURCE + 'scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(require('jshint-stylish')));
});

gulp.task('requirejs', ['lint'], function() {
    requirejs.optimize({
        baseUrl: PATH.SOURCE + 'scripts/',
        out: PATH.BUILD + 'scripts/site.min.js',
        mainConfigFile: PATH.SOURCE + 'scripts/main.js',
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

gulp.task('images', function() {
    return gulp.src(PATH.SOURCE + 'media/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(PATH.BUILD + 'media/images/'));
});

gulp.task('clean', function() {
    del([
        PATH.BUILD + 'media/**/*',
        PATH.BUILD + 'scripts/**/*'
    ], function(err) {
        //console.log(err);
    });
});

gulp.task('webserver-dev', function() {
    gulp.src(PATH.SOURCE)
        .pipe(webserver({
            host: '127.0.0.1',
            port: 8080,
            livereload: true
        }));
});

gulp.task('webserver', function() {
    gulp.src(PATH.BUILD)
        .pipe(webserver({
            host: '127.0.0.1',
            port: 8080,
            livereload: true
        }));
});

gulp.task('build', function(cb) {
    runSequence(
        'clean',
        ['requirejs', 'images'],
        'webserver',
        cb
    );
});
