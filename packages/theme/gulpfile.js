var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
var path = require('path');

gulp.task('less', function() {
    return gulp.src(['./src/**/*.less', '!./src/common/**/*.less'])
    .pipe(less({
        plugins: [autoprefix]
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('../../lib/theme'))
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.less', gulp.series('less'));
})

gulp.task('default', gulp.parallel('less', 'watch', function(cb) {
    cb();
}));