var gulp   = require('gulp')
var pump   = require('pump')
var uglify = require('gulp-uglify')

var src  = gulp.src('src/**/*')
var dist = gulp.dest('dist')

gulp.task('default', ['build'])

gulp.task('build', function () {
  pump([
    src,
    uglify(),
    dist,
  ])
})
