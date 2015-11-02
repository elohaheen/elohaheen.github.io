var gulp     = require('gulp'),
    paths   = require('../paths'),
    plumber  = require('gulp-plumber'),
    jade     = require('gulp-jade');

gulp.task('html', function() {
  gulp.src('app/pages/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(paths.dist))
});
