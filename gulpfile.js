const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'))


function buildCSS() {
	return gulp
		.src('./sass/*.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
}

function buildHTML() {
	return gulp
		.src('views/*.pug')
		.pipe(pug({
			doctype: 'html',
			pretty: true
		}))
		.pipe(gulp.dest('.'))
}


function watchFiles() {
	gulp.watch('./sass/**/*.scss', buildCSS);
	gulp.watch('./views/**/*.pug', buildHTML);
}


// Registrar funciones como tareas

gulp.task('default', gulp.parallel(watchFiles, buildCSS, buildHTML))
