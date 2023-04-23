const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
  return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function compressJs() {
  return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compressImage() {
  return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'));
}

exports.watch = function() {
  gulp.watch('./source/styles/*scss', {ignoreInitial: false}, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJs));
  gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImage));
}
