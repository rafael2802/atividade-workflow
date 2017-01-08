var gulp = require("gulp");
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var del = require("del");

gulp.task('limparcss',function(){
	del(".dist/css/*.css");
});

gulp.task('limparhtml',function(){
	del(".dist/*.html");
});

/*Gera o css a partir do sass*/
gulp.task('geracss', function() {
    gulp.src('./source/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./source/css/'));
});

/*Compacta o css e manda para dist*/
gulp.task('cssmin', ['limparcss','geracss'], function () {
    gulp.src('./source/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'));
});

/*Compacta o html e manda para dist*/
gulp.task('htmlmin',  ['limparhtml'], function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('background',function(){
	gulp.watch('./source/scss/*.scss',['geracss']);
	gulp.watch('./source/css/*.css',['cssmin']);
	gulp.watch('./source/*.html',['htmlmin']);
});
