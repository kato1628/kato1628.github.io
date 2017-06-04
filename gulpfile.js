var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var cmq = require('gulp-combine-media-queries');//@media

gulp.task('sass',function(){
    gulp.src('stylesheets/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({style : 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('stylesheets/assets'));
});

gulp.task('watch', function () {
    gulp.watch('stylesheets/*.scss', ['sass']);
});
gulp.task('default', ['sass']);
