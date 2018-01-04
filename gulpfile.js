const gulp = require('gulp');

gulp.task("server", () => {
  return gulp.src("./src/server/**/*")
    .pipe(gulp.dest("./dist/"));
});
