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
    inject = require('gulp-inject'),
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
            'bitwise': true,
            'camelcase': true,
            'curly': true,
            'eqeqeq': true,
            'immed': true,
            'indent': 4,
            'latedef': true,
            'newcap': true,
            'noarg': true,
            'nonbsp': true,
            'quotmark': 'single',
            'undef': true,
            'unused': true,
            'strict': true,
            'trailing': true,

            // Relaxing options
            'esnext': true,
            'smarttabs': true,

            // Environments
            'browser': true,
            'devel': true,
            'node': true,

            // Custom globals
            'globals': {
                'CONFIG': true,
                'define': true
            }
        }))
        .pipe(jshint.reporter(stylish));
});

gulp.task('requirejs', ['lint'], function() {
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

gulp.task('styles', function() {
    return gulp.src([
            PATH.SOURCE + 'styles/**/*.css',
            PATH.SOURCE + 'vendor/ngDialog/css/ngDialog.min.css',
            PATH.SOURCE + 'fonts/**/*.css'
        ])
        .pipe(concat('site.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));
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
    gulp.src([
            PATH.SOURCE + 'fonts/fontello/font/*.eot',
            PATH.SOURCE + 'fonts/fontello/font/*.svg',
            PATH.SOURCE + 'fonts/fontello/font/*.ttf',
            PATH.SOURCE + 'fonts/fontello/font/*.woff'
        ])
        .pipe(gulp.dest(PATH.BUILD + 'font/'));
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
            PATH.BUILD + 'styles/site.min.css'
        ])
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest(PATH.BUILD + 'styles/'));
});

gulp.task('inject-scripts', ['requirejs'], function() {
    return gulp.src(PATH.BUILD + 'index.html')
        .pipe(inject(gulp.src(PATH.BUILD + 'scripts/site.min.js'), {
            starttag: '<!-- inject:head:js -->',
            transform: function(filePath, file) {
                return '<script>' + file.contents.toString('utf8') + '</script>';
            }
        }))
        .pipe(gulp.dest(PATH.BUILD));
});

gulp.task('inject-styles', ['styles'], function() {
    return gulp.src(PATH.BUILD + 'index.html')
        .pipe(inject(gulp.src(PATH.BUILD + 'styles/site.min.css'), {
            starttag: '<!-- inject:head:css -->',
            transform: function(filePath, file) {
                return '<style>' + file.contents.toString('utf8') + '</style>';
            }
        }))
        .pipe(gulp.dest(PATH.BUILD));
});

gulp.task('clean', function() {
    rimraf.sync(PATH.BUILD + 'index.html', function() {});
    rimraf.sync(PATH.BUILD + 'font/', function() {});
    rimraf.sync(PATH.BUILD + 'media/', function() {});
    rimraf.sync(PATH.BUILD + 'partials/', function() {});
    rimraf.sync(PATH.BUILD + 'scripts/', function() {});
    rimraf.sync(PATH.BUILD + 'styles/', function() {});
});

gulp.task('post-build', function() {
    gulp.src(PATH.BUILD + 'index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(PATH.BUILD));

    rimraf.sync(PATH.BUILD + 'scripts/', function() {});
    rimraf.sync(PATH.BUILD + 'styles/', function() {});
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
        ['requirejs', 'styles'],
        ['html', 'copy'],
        'concat',
        //'inject-scripts',
        //'inject-styles',
        //'post-build',
        'size',
        'server'
    );
});
