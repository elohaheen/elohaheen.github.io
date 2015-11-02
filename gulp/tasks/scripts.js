var gulp    = require('gulp'),
    paths  = require('../paths'),
    concat  = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify  = require('gulp-uglify'),
    flatten = require('gulp-flatten');

gulp.task('scripts', function() {
  gulp.src('app/components/**/*.js')
    .pipe(plumber())
    .pipe(concat('functions.js'))
    .pipe(uglify())
    .pipe(flatten())
    .pipe(gulp.dest(paths.js))
});
