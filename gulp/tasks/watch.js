var paths = require('../paths'),
    gulp  = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['app/pages/*.jade', 'app/components/**/*.jade'], ['html']);
  gulp.watch('app/components/**/*.css', ['css']);
  gulp.watch('app/components/**/*.js', ['scripts']);
  gulp.watch('app/components/**/*.{png,jpeg,jpg,svg}', ['images']);
});
