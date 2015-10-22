var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber');

gulp.task('build', ['html', 'css', 'scripts', 'fonts', 'images', 'js', 'copy']);
