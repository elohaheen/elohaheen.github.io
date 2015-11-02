var gulp    = require('gulp'),
    paths   = require('../paths'),
    plumber = require('gulp-plumber');

gulp.task('copy', function() {
  gulp.src('app/copy/*').pipe(gulp.dest(paths.dist));
});
