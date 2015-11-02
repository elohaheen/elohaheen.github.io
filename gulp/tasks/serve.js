var paths = require('../paths'),
    gulp   = require('gulp'),
    serve  = require('gulp-serve');

gulp.task('serve', serve(paths.dist)); // http://localhost:3000/
