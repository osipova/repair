var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  console.log('задача выполнена');
  done();
}

gulp.task('minify-css', function (done) {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
  done();
});

gulp.task('move-js', function (done) {
  return gulp.src('./src/js/*.min.js')
    .pipe(gulp.dest('dist/js'))
  done();
});

gulp.task('minify', function (done) {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function (done) {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
  done();
});

gulp.task('tinypng', function () {
  return gulp.src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      //key : 'API_KEY'
      key: 'S7Pg23cV7Hw0W5RPdq22ThcBP5lJd58v',
      cache: true
    }))
    .pipe(gulp.dest('dist/img/'))
  done();
});

var minifyjs = require('gulp-js-minify');

gulp.task('minify-js', function(){
  return gulp.src('src/js/*.js', '!src/js/*.min.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('dist/js/'))
    done();
});

gulp.task('build', gulp.parallel('minify-css', 'fonts', 'tinypng', 'minify', 'minify-js', 'move-js', function (done) {
  // do more stuff
  done();
}));
