var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber');

gulp.task('js', function() {
  gulp.src(config.paths.app.js).pipe(gulp.dest(config.paths.dist.js));
});
