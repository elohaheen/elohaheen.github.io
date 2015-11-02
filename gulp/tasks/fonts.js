var gulp    = require('gulp'),
    paths   = require('../paths'),
    plumber = require('gulp-plumber'),
    flatten = require('gulp-flatten');

gulp.task('fonts', function() {
  gulp.src('app/components/**/*.{eot,ttf,woff,woff2,svg}')
  .pipe(flatten())
  .pipe(gulp.dest(paths.fonts));
});
