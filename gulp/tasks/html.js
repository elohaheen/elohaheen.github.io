var gulp     = require('gulp'),
    config   = require('../config'),
    plumber  = require('gulp-plumber'),
    prettify = require('gulp-html-prettify'),
    jade     = require('gulp-jade');

gulp.task('html', function() {
  gulp.src(config.paths.app.html)
    .pipe(plumber())
    .pipe(jade())
    .pipe(prettify({
          brace_style: 'expand',
          indent_size: 1,
          indent_char: '\t',
          indent_inner_html: true,
          preserve_newlines: true
        }))
    .pipe(gulp.dest(config.paths.dist.html))
});
