var gulp
  , gutil
  , gwatch
  , glint
  , concat
  , uglify
  , rename
  ;

gulp    = require('gulp');
gutil   = require('gulp-util');
gwatch  = require('gulp-watch');
gjshint = require('gulp-jshint');
concat  = require('gulp-concat');
uglify  = require('gulp-uglify');
rename  = require('gulp-rename');


gulp.task('stream',
    function() {
      return gulp.src('./css/**/*.css')
          .pipe( watch('./css/**/*.css') )
          .pipe( gulp.dest('build'));

    });


gulp.task('lint', 
  function() {
    return gulp.src('./js/**/*.js')
      .pipe( gjshint() )
      .pipe( gjshint.reporter('default') );
  
  });


gulp.task('scripts',
  function() {
    var _dest = 'dist';

    return gulp.src('./js/**/*.js')
      .pipe( concat('all.js') )
      .pipe( gulp.dest(_dest) )
      .pipe( rename('all.min.js') )
      .pipe( uglify() )
      .pipe( gulp.dest(_dest) )
    });


gulp.task('watch', 
  function() {
    gulp.watch('./js/**/*.js', ['lint', 'scripts'])
  });

gulp.task('default', ['lint', 'scripts']);
