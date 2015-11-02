var gulp    = require('gulp'),
    paths   = require('../paths'),
    plumber = require('gulp-plumber');

gulp.task('build', ['html', 'css', 'scripts', 'fonts', 'images', 'js', 'copy']);
