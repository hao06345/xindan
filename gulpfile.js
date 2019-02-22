var cuijn_gulp = require('gulp');
function index() {
	return cuijn_gulp
		.src('./src/index.html')
		.pipe(cuijn_gulp.dest('./dist'))
}

cuijn_gulp.task('index', index)