var gulp   = require('gulp'),
    config = require('../config'),
    del    = require('del');

gulp.task('del', function(cb) {
  del('././dist/', cb);
});
