var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('scripts', function() {
  return gulp.src('./src/app/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('html', function() {
  return gulp.src('./src/**/**.html')
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('default', ['scripts', 'html'], function() {
  gulp.watch('./src/app/**/**.js', ['scripts']);
  gulp.watch('./src/**/**.html', ['html']);
});
