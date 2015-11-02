var gulp     = require('gulp'),
    paths    = require('../paths'),
    plumber  = require('gulp-plumber'),
    gulpif   = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    svgo     = require('imagemin-svgo'),
    pngquant = require('imagemin-pngquant'),
    flatten  = require('gulp-flatten');

gulp.task('images', function() {
  gulp.src(['app/components/**/*.{png,jpeg,jpg,svg}', '!./app/components/font/**/*.svg'])
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
  .pipe(gulp.dest(paths.images))
});
