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

gulp.task('copy-charts-to-server', function () {
	return gulp.src(
		['infographics-chart/target/production/app.min.js',
			'infographics-chart/target/production/src/app.css'])
		.pipe(gulp.dest('infographics-server/src/public/js/graphs'))
})


gulp.task('build', ['copy-angular-to-server','copy-default-to-server','copy-charts-to-server'], function () { });