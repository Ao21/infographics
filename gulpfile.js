var gulp = require('gulp');

gulp.task('copy-angular-to-server', function () {
	return gulp.src('infographics-angular/dist/**')
		.pipe(gulp.dest('infographics-server/angular-dist'))
})

gulp.task('build', ['copy-angular-to-server'], function () { });