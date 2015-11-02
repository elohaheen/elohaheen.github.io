var gulp   = require('gulp'),
    paths  = require('../paths'),
    del = require('del');

gulp.task('clean', function(cb) {
  del(paths.dist, cb);
});
