'use_strict';
//base part
let     gulp = require('gulp'),
        rename  = require('gulp-rename'),
        path = require('path'),
        include = require('gulp-include'),
        uglify  = require('gulp-uglify'),
        pug = require('gulp-pug');

//css part
let     sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css'),
        autoprefixer = require('gulp-autoprefixer');

function swallowError(error){
    console.log(error.toString());
    this.emit('end');
}

gulp.task('default', ['gulp_watch']);

gulp.task('gulp_watch', function () {
    gulp.watch('dev/sass/**/*.scss', ['styles']);
    gulp.watch('dev/js/**/*.js', ['scripts']);
    gulp.watch('dev/html/**/*.pug', ['pages']);
});

gulp.task('styles', function () {
    return gulp.src('dev/sass/core.scss')
        .pipe(sass().on('error', sass.logError))
        .on('error', swallowError)
        .pipe(autoprefixer({
            browsers: ['last 20 versions', '> 5%'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
    return gulp.src('dev/js/index.js')
        .pipe(include())
        .pipe(rename('app.min.js'))
        .on('error', swallowError)
        .pipe(uglify()) //минифицируем js файл
        .pipe(gulp.dest('./js'));   //сохраняем минифицированную версию
});

gulp.task('pages', function buildHTML() {
    return gulp.src('dev/html/index.pug')
        .pipe(pug({pretty: true}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});