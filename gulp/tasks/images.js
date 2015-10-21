var gulp     = require('gulp'),
    config   = require('../config'),
    plumber  = require('gulp-plumber'),
    gulpif   = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    svgo     = require('imagemin-svgo'),
    pngquant = require('imagemin-pngquant'),
    flatten  = require('gulp-flatten');

gulp.task('images', function() {
  gulp.src(config.paths.app.images)
  .pipe(plumber())
  .pipe(gulpif(/[.](png|jpeg|jpg|svg)$/, imagemin({
    optimizationLevel: 1,
    progressive: true,
    svgoPlugins: [{
      removeViewBox: false
    }],
    use: [pngquant()]
  })))
  .pipe(flatten())
  .pipe(gulp.dest(config.paths.dist.images))
});
