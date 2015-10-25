var gulp         = require('gulp'),
    config       = require('../config'),
    postcss      = require('gulp-postcss'),
    plumber      = require('gulp-plumber'),
    minmax       = require('postcss-media-minmax'),
    nested       = require('postcss-nested'),
    vars         = require('postcss-simple-vars'),
    url          = require('gulp-modify-css-urls'),
    color        = require('postcss-color-function'),
    combiner     = require('stream-combiner2'),
    pxtorem      = require('postcss-pxtorem'),
    lost         = require('lost'),
    autoprefixer = require('autoprefixer'),
    typography   = require('postcss-responsive-type'),
    plumber      = require('gulp-plumber'),
    focus        = require('postcss-focus'),
    order        = require('gulp-order'),
    concat       = require('gulp-concat'),
    cssmin       = require('gulp-minify-css');

gulp.task('css', function () {

  var processors = [
    nested,
    minmax,
    pxtorem,
    typography,
    vars,
    focus,
    color,
    lost,
    autoprefixer({
      browsers: ['last 2 version', 'IE 8', 'IE 9', 'IE 10', 'IE 11', 'Opera 12']
    })
  ];

  var combined = combiner.obj([
    gulp.src(config.paths.app.styles),
    order(['reset.css', 'font.css']),
    postcss(processors),

    url({modify: function(url) {
      var name = url.split('/').pop(),
        extension = /\w+/.exec(name.split('?')[0].split('.').pop())[0];

          switch(extension) {

            case 'jpg':
            case 'png':
              return '../' + config.paths.dist.images.split('/').pop() + '/' + name;
            case 'svg':
            case 'eot':
            case 'ttf':
            case 'woff':
            case 'woff2':
              return '../' + config.paths.dist.fonts.split('/').pop() + '/' + name;

          }
    }}),

    concat('common.css'),
    cssmin(),
    gulp.dest(config.paths.dist.styles),
  ]);
  combined.on('error', console.error.bind(console));
});
