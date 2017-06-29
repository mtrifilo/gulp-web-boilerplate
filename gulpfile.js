const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('syle.css').on('change', browserSync.reload);
  gulp.watch('app.js').on('change', browserSync.reload);
});
