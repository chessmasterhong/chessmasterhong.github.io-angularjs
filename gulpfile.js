'use strict';

var PATH = {
    BUILD: './',
    SOURCE: './src/'
};

var gulp = require('gulp'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
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
    gulp.src(PATH.SOURCE + 'styles/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));

    gulp.src(PATH.SOURCE + 'fonts/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(PATH.BUILD + 'fonts/'));

    gulp.src([
            PATH.SOURCE + 'fonts/**/*.eot',
            PATH.SOURCE + 'fonts/**/*.svg',
            PATH.SOURCE + 'fonts/**/*.ttf',
            PATH.SOURCE + 'fonts/**/*.woff'
        ])
        .pipe(gulp.dest(PATH.BUILD + 'fonts/'));

    gulp.src([
            PATH.SOURCE + 'vendor/ngDialog/css/ngDialog.min.css',
            PATH.SOURCE + 'vendor/ngDialog/css/ngDialog-theme-default.min.css'
        ]).pipe(gulp.dest(PATH.BUILD + 'vendor/ngDialog/css/'));
});

gulp.task('images', function() {
    gulp.src(PATH.SOURCE + 'media/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(PATH.BUILD + 'media/images/'));
});

gulp.task('html', function() {
    gulp.src(PATH.SOURCE + 'index.html')
        .pipe(prochtml('index.html'))
        .pipe(minifyHTML())
        .pipe(gulp.dest(PATH.BUILD));

    gulp.src(PATH.SOURCE + 'partials/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(PATH.BUILD + 'partials/'));
});

gulp.task('copy', function() {
    gulp.src(PATH.SOURCE + 'vendor/requirejs/require.min.js')
        .pipe(gulp.dest(PATH.BUILD + 'vendor/requirejs/'));
});

//gulp.task('clean', function() {
//    del([
//        PATH.BUILD + 'index.html',
//        PATH.BUILD + 'fonts/**/*',
//        PATH.BUILD + 'media/**/*',
//        PATH.BUILD + 'partials/**/*',
//        PATH.BUILD + 'scripts/**/*',
//        PATH.BUILD + 'styles/**/*',
//        PATH.BUILD + 'vendor/**/*'
//    ], function(err) {
//        if(typeof err !== 'undefined') {
//            console.log(err);
//        }
//    });
//});

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

gulp.task('build', function() {
    runSequence(
        ['copy', 'html', 'images', 'requirejs', 'styles'],
        'webserver'
    );
});
