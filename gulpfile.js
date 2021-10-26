var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

function buildStyles() {
  return gulp.src([
    './css/style.scss',
    './css/sass/*.scss'
])
    .pipe(concat("style.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./css/sass/**/*.scss',buildStyles);
    gulp.watch(["*.html", "./css/style.css"]).on("change", browserSync.reload);
}

module.exports = {
    buildStyles,
    watch
};