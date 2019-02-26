var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');

//sass
function sass() {
	return gulp
	.src('./src/style/**/*.scss')
	.pipe(gulpSass({
		// outputStyle: 'nested'
		// outputStyle: 'compact'
		outputStyle:'expanded'
		// outputStyle: 'compressed'
	}).on('error', gulpSass.logError))
	.pipe(gulp.dest('./dist/css'))
}
gulp.task('sass', sass)

//index
function index() {
	return gulp
		.src('./src/index.html')
		.pipe(gulp.dest('./dist'))
}
gulp.task('index', index)

//html
function html() {
	return gulp.src('./src/html/*.html')
			.pipe(gulp.dest('./dist/html'))
}
gulp.task('html', html)


//img
function img() {
	return gulp.src('./src/resource/imgs/**/*.{png,jpg,gif}')
	           .pipe(gulp.dest('./dist/resource/img'))
}
gulp.task('img', img)
//js
function js () {
	return gulp.src('./src/js/*.js')
		.pipe(concat('xindan.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
}
gulp.task('js', js)
function jQuery () {
	return gulp.src('./src/js/vendor/**/*.js')
		.pipe(concat('jQuery.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/vendor'))
}
gulp.task('jQuery', jQuery)

function singin () {
	return gulp.src('./src/js/singin.js')
		.pipe(concat('singin.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
}
gulp.task('singin', singin)

function login() {
	return gulp.src('./src/js/login.js')
		.pipe(concat('login.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
}
gulp.task('login', login)
//并行
var build = gulp.parallel(index,img,js,html,sass,jQuery,login);
gulp.task('build',build);

//创建任务实现自动刷新
//	1. 创建一个server(gulp-connect)
function reload () {
	gulp.src('./dist/**/*.html')
		.pipe(connect.reload())
}
function watch() {
	gulp.watch('./src/index.html', index)
	gulp.watch('./dist/**/*.*', reload)
	gulp.watch('./src/js/**/*.js', js)
	gulp.watch('./src/html/*.html', html)
	gulp.watch('./src/style/**/*.scss', sass)
}
gulp.task('watch', watch)

function server () {
	connect.server({
		root: './dist',
		livereload: true
	})
}
gulp.task('server', server)

var task = gulp.parallel(watch, server)

gulp.task('default', task);
                                                                           













