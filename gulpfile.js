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
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    insert = require('gulp-insert'),
    jshint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    prochtml = require('gulp-processhtml'),
    requirejs = require('requirejs'),
    runSequence = require('run-sequence'),
    size = require('gulp-size'),
    stylish = require('jshint-stylish'),
    webserver = require('gulp-webserver');

gulp.task('lint', function() {
    return gulp.src(PATH.SOURCE + 'scripts/**/*.js')
        .pipe(jshint({
            'bitwise': true,
            'camelcase': true,
            'curly': true,
            'eqeqeq': true,
            'forin': true,
            'immed': true,
            'indent': 4,
            'latedef': true,
            'newcap': true,
            'noarg': true,
            'nonbsp': true,
            'nonew': true,
            'quotmark': 'single',
            'strict': true,
            'trailing': true,
            'undef': true,
            'unused': true,

            'esnext': true,
            'smarttabs': true,
            'sub': true,

            'browser': true,
            'devel': true,
            'node': true,

            'globals': {
                'CONFIG': true,
                'define': true
            }
        }))
        .pipe(jshint.reporter(stylish));
});

gulp.task('optimize-scripts', ['lint'], function() {
    requirejs.optimize({
        baseUrl: PATH.SOURCE + 'scripts/',
        out: PATH.BUILD + 'scripts/site.min.js',
        mainConfigFile: PATH.SOURCE + 'scripts/main.js',
        include: ['../vendor/requirejs/require.min.js', 'main'],
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

gulp.task('optimize-styles', function() {
    return gulp.src([
            PATH.SOURCE + 'vendor/normalize-css/normalize.css',
            PATH.SOURCE + 'vendor/ngDialog/css/ngDialog.min.css',
            PATH.SOURCE + 'fonts/**/*.css',
            PATH.SOURCE + 'styles/**/*.css'
        ])
        .pipe(concat('site.min.css'))
        .pipe(minifyCSS({ keepSpecialComments: 0 }))
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));
});

gulp.task('optimize-images', function() {
    return gulp.src(PATH.SOURCE + 'media/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(PATH.BUILD + 'media/images/'));
});

gulp.task('optimize-html', function() {
    gulp.src(PATH.SOURCE + 'index.html')
        .pipe(prochtml('index.html'))
        .pipe(minifyHTML())
        .pipe(gulp.dest(PATH.BUILD));

    gulp.src(PATH.SOURCE + 'partials/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(PATH.BUILD + 'partials/'));
});

gulp.task('copy', function() {
    gulp.src([
            PATH.SOURCE + 'fonts/fontello/font/*.eot',
            PATH.SOURCE + 'fonts/fontello/font/*.svg',
            PATH.SOURCE + 'fonts/fontello/font/*.ttf',
            PATH.SOURCE + 'fonts/fontello/font/*.woff',
            PATH.SOURCE + 'fonts/lato/font/*.woff'
        ])
        .pipe(gulp.dest(PATH.BUILD + 'font/'));
});

gulp.task('concat-header-scripts', function() {
    return gulp.src([
            PATH.SOURCE + 'tasks/license.js',
            PATH.BUILD + 'scripts/site.min.js'
        ])
        .pipe(concat('site.min.js'))
        .pipe(gulp.dest(PATH.BUILD + 'scripts/'));
});

gulp.task('concat-header-styles', function() {
    return gulp.src([
            PATH.SOURCE + 'tasks/license.css',
            PATH.BUILD + 'styles/site.min.css'
        ])
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));
});

gulp.task('clean', function(done) {
    del([
        PATH.BUILD + 'index.html',
        PATH.BUILD + 'font/',
        PATH.BUILD + 'media/',
        PATH.BUILD + 'partials/',
        PATH.BUILD + 'scripts/',
        PATH.BUILD + 'styles/',
    ], done);
});

gulp.task('post-build-scripts', function() {
    var date = new Date();

    return gulp.src(PATH.BUILD + 'scripts/site.min.js')
        .pipe(insert.prepend('// scripts.min.js build: ' + date + '\n'))
        .pipe(gulp.dest(PATH.BUILD + 'scripts/'));
});

gulp.task('post-build-styles', function() {
    var date = new Date();

    return gulp.src(PATH.BUILD + 'styles/site.min.css')
        .pipe(insert.prepend('/* site.min.js build: ' + date + '*/\n'))
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));
});

gulp.task('post-build', function() {
    //gulp.src(PATH.BUILD + 'index.html')
    //    .pipe(minifyHTML())
    //    .pipe(gulp.dest(PATH.BUILD));

    //rimraf.sync(PATH.BUILD + 'scripts/', function() {});
    //rimraf.sync(PATH.BUILD + 'styles/', function() {});
});

gulp.task('size', function() {
    return gulp.src([
            PATH.BUILD + 'index.html',
            PATH.BUILD + 'fonts/**/*',
            PATH.BUILD + 'media/**/*',
            PATH.BUILD + 'partial/**/*',
            PATH.BUILD + 'scripts/**/*',
            PATH.BUILD + 'styles/**/*',
        ])
        .pipe(size({
            gzip: true,
            title: 'build -->'
        }));
});

gulp.task('server-dev', function() {
    gulp.src(PATH.SOURCE)
        .pipe(webserver({
            host: SERVER.HOST,
            port: SERVER.PORT,
            livereload: true
        }));
});

gulp.task('server', function() {
    gulp.src(PATH.BUILD)
        .pipe(webserver({
            host: SERVER.HOST,
            port: SERVER.PORT
        }));
});

gulp.task('build', function() {
    runSequence(
        'clean',
        ['optimize-styles', 'optimize-scripts', 'optimize-html', 'copy'],
        'concat-header-styles',
        'concat-header-scripts',
        ['post-build-styles', 'post-build-scripts'],
        'size', 'server'
    );
});
