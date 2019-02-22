var gulp = require('gulp');
var gulpSass = require('gulp-sass');

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

gulp.task('watch', function () {
	return gulp.watch('./src/style/*.scss', sass)
})

//index
function index() {
	return gulp
		.src('./src/index.html')
		.pipe(gulp.dest('./dist'))
}
gulp.task('index', index)