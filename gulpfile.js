var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin')
var htmlmin = require('gulp-htmlmin');

gulp.task('less', function() {
	return gulp.src('css/style.less')
	.pipe(less())
	.pipe(gulp.dest('css'))
});

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixes', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('cssmin', function () {
    return gulp.src('css/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))
});

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});
