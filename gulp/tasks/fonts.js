var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber'),
    flatten = require('gulp-flatten');

gulp.task('fonts', function() {
  gulp.src(config.paths.app.fonts)
  .pipe(flatten({ includeParents: 0}))
  .pipe(gulp.dest(config.paths.dist.fonts));
});
