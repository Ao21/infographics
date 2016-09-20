var gulp = require('gulp');

gulp.task('copy-angular-to-server', function () {
	return gulp.src('infographics-angular/dist/**')
		.pipe(gulp.dest('infographics-server/angular-dist'))
})

gulp.task('copy-default-to-server', function () {
	return gulp.src(
		['infographics-default/target/production/app.min.js','infographics-default/target/production/src/app.css'])
		.pipe(gulp.dest('infographics-server/src/public/js/infographic'))
})


gulp.task('build', ['copy-angular-to-server','copy-default-to-server'], function () { });