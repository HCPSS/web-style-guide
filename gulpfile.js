// gulp tasks
const gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  del = require('del'),
  rename = require('gulp-rename');

// folder variables
const assets = 'assets';

// task variables
var sassInput = 'masterkey.scss';
var sassOutput = 'css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// tasks, listed in order of execution when 'gulp' command is executed in the terminal

gulp.task('delete', () => {
	del([assets + '/*'], function(err) {
		console.log('Files Deleted');
	})
})

gulp.task('sass', () => {
  return gulp
  .src(sassInput)
  // run Sass on those files
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write('maps'))
  // write the resulting CSS in the output folder
  .pipe(gulp.dest(sassOutput));
})

gulp.task('style', () => {
	return gulp
	.src('css/masterkey.css')
	.pipe(rename({basename: 'main', suffix: '.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest(assets));
})

gulp.task('watch', () => {
  gulp.watch(sassInput, ['sass']);  
  gulp.watch('components/**/*.scss', ['sass']);
  gulp.watch('sass-config/**/*.scss', ['sass']);  
  gulp.watch('css/masterkey.css', ['style']);
})

gulp.task('default', ['delete', 'sass', 'style', 'watch'])
