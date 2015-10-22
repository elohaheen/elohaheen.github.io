var config = require('../config'),
    gulp   = require('gulp');

gulp.task('watch', function() {
  gulp.watch(config.paths.app.jade, ['html']);
  gulp.watch(config.paths.app.styles, ['css']);
  gulp.watch(config.paths.app.scripts, ['scripts']);
  gulp.watch(config.paths.app.images, ['images']);
});
