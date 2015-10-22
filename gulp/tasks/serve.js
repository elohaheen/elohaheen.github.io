var config = require('../config'),
    gulp   = require('gulp'),
    serve  = require('gulp-serve');

gulp.task('serve', serve('././dist')); // http://localhost:3000/
