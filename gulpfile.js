'use strict';

var PATH = {
    BUILD: './',
    SOURCE: './src/'
}

var gulp = require('gulp'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    prochtml = require('gulp-processhtml'),
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

gulp.task('styles', function() {
    return gulp.src(PATH.SOURCE + 'styles/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(PATH.BUILD + 'styles/'))
})

gulp.task('images', function() {
    return gulp.src(PATH.SOURCE + 'media/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(PATH.BUILD + 'media/images/'));
});

gulp.task('html', function() {
    return gulp.src(PATH.SOURCE + 'index.html')
        .pipe(prochtml('index.html'))
        .pipe(gulp.dest(PATH.BUILD));
});

gulp.task('copy', function() {
    gulp.src(PATH.SOURCE + 'fonts/**/*', { read: false })
        .pipe(gulp.dest(PATH.BUILD + 'fonts/'));

    gulp.src(PATH.SOURCE + 'partials/**/*', { read: false })
        .pipe(gulp.dest(PATH.BUILD + 'partials/'));

    gulp.src(PATH.SOURCE + 'vendor/requirejs/require.min.js', { read: false })
        .pipe(gulp.dest(PATH.BUILD + 'vendor/requirejs/'));
})

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
        ['copy', 'requirejs', 'images'],
        'webserver',
        cb
    );
});
