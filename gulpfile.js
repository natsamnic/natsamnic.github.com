var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());        
});

gulp.task('html', function () {
  gulp.src('./*.html')
      .pipe(connect.reload());
});

// -----
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./*.html','./scss/*.scss'], ['html','sass']);
});

gulp.task('default',['connect','watch']);