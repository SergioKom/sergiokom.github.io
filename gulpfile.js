const {src, dest, watch, parallel} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const include = require('gulp-include');

function styles() {
    return src('dev/sass/core.scss')
        .pipe(autoprefixer({ overrideBrowserlist: ['last 10 version'] }))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('ready/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'dev/js/utils.js'
    ])
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(dest('ready/js'))
        .pipe(browserSync.stream())
}

function pages() {
    return src('dev/html/index.html')
        .pipe(include({
            includePaths: 'dev/html/blocks'
        }))
        .pipe(dest('ready'))
        .pipe(browserSync.stream())
}

function watcher() {
    browserSync.init({
        server: {
            baseDir: 'ready/'
        }
    });
    watch(['dev/sass/*.scss'], styles)
    watch(['dev/js/utils.js'], scripts)
    watch(['dev/html/index.html', 'dev/html/blocks/*.html'], pages)
    watch(['dev/*.html']).on('change', browserSync.reload)
}

exports.styles = styles;
exports.scripts = scripts;
exports.pages = pages;
exports.watcher = watcher;

exports.default = parallel(styles, scripts, pages, watcher);