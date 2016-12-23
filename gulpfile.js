'use strict';
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('bundle', function() {
  gulp.src('client/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(uglify())
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/javascripts/'));
});
