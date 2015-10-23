var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber');

gulp.task('copy', function() {
  gulp.src(config.paths.app.copy).pipe(gulp.dest(config.paths.dist.copy));
});
