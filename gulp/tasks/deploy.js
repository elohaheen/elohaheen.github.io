var paths   = require('../paths'),
    gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    build   = require('gulp-gh-pages');

gulp.task('deploy', function () {
  console.log('deploying');
  return gulp.src('././dist/**')
  .pipe(plumber())
  .pipe(build().on('error', function() {
    console.log('error', arguments);
  }));
});
