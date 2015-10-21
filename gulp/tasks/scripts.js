var gulp    = require('gulp'),
    config  = require('../config'),
    concat  = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify  = require('gulp-uglify'),
    flatten = require('gulp-flatten');

gulp.task('scripts', function() {
  gulp.src(config.paths.app.scripts)
    .pipe(plumber())
    .pipe(concat('functions.js'))
    .pipe(uglify())
    .pipe(flatten())
    .pipe(gulp.dest(config.paths.dist.js))
});
