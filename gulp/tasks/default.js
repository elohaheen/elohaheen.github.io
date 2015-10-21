var config = require('../config'),
    gulp   = require('gulp'),
    serve  = require('gulp-serve');

gulp.task('default', ['watch', 'serve']);

gulp.task('watch', function() {
  gulp.watch(config.paths.app.jade, ['html']);
  gulp.watch(config.paths.app.styles, ['css']);
  gulp.watch(config.paths.app.scripts, ['scripts']);
  gulp.watch(config.paths.app.images, ['images']);
});

gulp.task('serve', serve('././dist')); // http://localhost:3000/
