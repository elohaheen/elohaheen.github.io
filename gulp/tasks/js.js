var gulp    = require('gulp'),
    paths  = require('../paths'),
    plumber = require('gulp-plumber');

gulp.task('js', function() {
  gulp.src(paths.nodeModules).pipe(gulp.dest(paths.js));
});
