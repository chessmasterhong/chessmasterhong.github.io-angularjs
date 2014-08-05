'use strict';

var SERVER = {
        HOST: '127.0.0.1',
        PORT: 8080
    },
    PATH = {
        BUILD: './',
        SOURCE: './src/'
    };

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    prochtml = require('gulp-processhtml'),
    requirejs = require('requirejs'),
    rimraf = require('rimraf'),
    runSequence = require('run-sequence'),
    size = require('gulp-size'),
    stylish = require('jshint-stylish'),
    webserver = require('gulp-webserver');

gulp.task('lint', function() {
    return gulp.src(PATH.SOURCE + 'scripts/**/*.js')
        .pipe(jshint({
            // Enforcing options
            "bitwise": true,
            "camelcase": true,
            "curly": true,
            "eqeqeq": true,
            "immed": true,
            "indent": 4,
            "latedef": true,
            "newcap": true,
            "noarg": true,
            "nonbsp": true,
            "quotmark": "single",
            "undef": true,
            "unused": true,
            "strict": true,
            "trailing": true,

            // Relaxing options
            "esnext": true,
            "smarttabs": true,

            // Environments
            "browser": true,
            "devel": true,
            "node": true,

            // Custom globals
            "globals": {
                "CONFIG": true,
                "define": true
            }
        }))
        .pipe(jshint.reporter(stylish));
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
});

gulp.task('images', function() {
    return gulp.src(PATH.SOURCE + 'media/images/**/*')
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

    gulp.src([
            PATH.SOURCE + 'vendor/ngDialog/css/ngDialog.min.css',
            PATH.SOURCE + 'vendor/ngDialog/css/ngDialog-theme-default.min.css'
        ])
        .pipe(gulp.dest(PATH.BUILD + 'vendor/ngDialog/css/'));

    gulp.src([
            PATH.SOURCE + 'fonts/**/*.eot',
            PATH.SOURCE + 'fonts/**/*.svg',
            PATH.SOURCE + 'fonts/**/*.ttf',
            PATH.SOURCE + 'fonts/**/*.woff'
        ])
        .pipe(gulp.dest(PATH.BUILD + 'fonts/'));
});

gulp.task('concat', function() {
    gulp.src([
            PATH.SOURCE + 'tasks/licence.js',
            PATH.BUILD + 'scripts/site.min.js'
        ])
        .pipe(concat('site.min.js'))
        .pipe(gulp.dest(PATH.BUILD + 'scripts/'));

    gulp.src([
            PATH.SOURCE + 'tasks/licence.css',
            PATH.BUILD + 'styles/site.css'
        ])
        .pipe(concat('site.css'))
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));
});

gulp.task('clean', function() {
    rimraf.sync(PATH.BUILD + 'index.html', function() {});
    rimraf.sync(PATH.BUILD + 'fonts/', function() {});
    rimraf.sync(PATH.BUILD + 'media/', function() {});
    rimraf.sync(PATH.BUILD + 'partials/', function() {});
    rimraf.sync(PATH.BUILD + 'scripts/', function() {});
    rimraf.sync(PATH.BUILD + 'styles/', function() {});
    rimraf.sync(PATH.BUILD + 'vendor/', function() {});
});

gulp.task('size', function() {
    return gulp.src([
            PATH.BUILD + 'index.html',
            PATH.BUILD + 'fonts/**/*',
            PATH.BUILD + 'media/**/*',
            PATH.BUILD + 'partial/**/*',
            PATH.BUILD + 'scripts/**/*',
            PATH.BUILD + 'styles/**/*',
            PATH.BUILD + 'vendor/**/*',
        ])
        .pipe(size({
            gzip: true,
            title: 'build -->'
        }));
});

gulp.task('webserver-dev', function() {
    gulp.src(PATH.SOURCE)
        .pipe(webserver({
            host: SERVER.HOST,
            port: SERVER.PORT,
            livereload: true
        }));
});

gulp.task('webserver', function() {
    gulp.src(PATH.BUILD)
        .pipe(webserver({
            host: SERVER.HOST,
            port: SERVER.PORT
        }));
});

gulp.task('build', function() {
    runSequence(
        'clean',
        ['copy', 'html', 'images', 'requirejs', 'styles'],
        'concat',
        'size',
        'webserver'
    );
});
