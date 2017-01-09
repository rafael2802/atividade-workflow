var gulp = require("gulp");
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

/*Gera o css compactado a partir do sass*/
gulp.task('geracss', function() {
    gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});


/*Compacta o html e manda para dist*/
gulp.task('htmlmin', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('background',function(){
	gulp.watch('./source/scss/*.scss',['geracss']);
	gulp.watch('./source/*.html',['htmlmin']);
});