'use strict';

// var path = require('path'),
//   gulp = require('gulp'),
//   conf = require('./conf');
//
// gulp.task('start', function () {
//   return gulp.src([
//     path.join(conf.paths.src, '/*.js'),
//     path.join(conf.paths.src, '/**/*.js')
//   ])
//   .pipe(gulp.dest(conf.paths.src));
// });

var gulp = require('gulp'),
  path = require('path'),
  conf = require('./conf'),
  nodemon = require('gulp-nodemon');

var nodemonOptions = {
  script: 'bin/www',
  ext: '',
  env: {
    NODE_ENV: 'development'
  },
  verbose: false,
  ignore: [],
  watch: [[
    path.join(conf.paths.src, '/*.js'),
    path.join(conf.paths.src, '/**/*.js')
  ]]
};

gulp.task('start', function () {
  nodemon(nodemonOptions)
    .on('restart', function () {
      console.log('restarted!');
    });
});
