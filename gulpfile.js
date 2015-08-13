var gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create();

gulp.task("serve", function() {
    browserSync.init({
        proxy: "localhost:8000"
    })
    gulp.watch("src/app.css", ["css"]);
    gulp.watch("index.html").on("change", browserSync.reload);
});

// Autoprefix the CSS
gulp.task("css", function() {
    return gulp.src("src/app.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
