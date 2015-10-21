var gulp         = require('gulp'),
    config       = require('../config'),
    postcss      = require('gulp-postcss'),
    plumber      = require('gulp-plumber'),
    minmax       = require('postcss-media-minmax'),
    imprt        = require('postcss-import'),
    nested       = require('postcss-nested'),
    vars         = require('postcss-simple-vars'),
    color        = require('postcss-color-function'),
    pxtorem      = require('postcss-pxtorem'),
    lost         = require('lost'),
    autoprefixer = require('autoprefixer'),
    typography   = require('postcss-responsive-type'),
    plumber      = require('gulp-plumber'),
    focus        = require('postcss-focus'),
    order        = require('gulp-order'),
    concat       = require('gulp-concat'),
    cssmin       = require('gulp-minify-css');

gulp.task('css', function() {
  var processors = [
    imprt({
      from: process.cwd() + '/app/components/layout/layout.css',
      glob: true
    }),
    nested,
    minmax,
    pxtorem,
    typography,
    vars,
    focus,
    color,
    lost,
    autoprefixer({
      browsers: ['last 2 version', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
    })
  ];
  gulp.src(config.paths.app.styles)
  .pipe(plumber())
  .pipe(order(['reset.css', 'font.css']))
  .pipe(postcss(processors))
  .pipe(concat('common.css'))
  //.pipe(cssmin())
  .pipe(gulp.dest(config.paths.dist.styles))
});
