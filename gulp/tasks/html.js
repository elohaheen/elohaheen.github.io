var gulp     = require('gulp'),
    config   = require('../config'),
    plumber  = require('gulp-plumber'),
    jade     = require('gulp-jade');

gulp.task('html', function() {
  gulp.src(config.paths.app.html)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(config.paths.dist.html))
});
