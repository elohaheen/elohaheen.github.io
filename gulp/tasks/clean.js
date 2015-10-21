var gulp   = require('gulp'),
    config = require('../config'),
    rimraf = require('rimraf');

gulp.task('clean', function(cb) {
  rimraf('././dist/', cb);
});
