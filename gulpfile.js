var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// serve task
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on("change", reload);
  gulp.watch("*.css").on("change", reload);
  gulp.watch("*.js").on("change", reload);
});