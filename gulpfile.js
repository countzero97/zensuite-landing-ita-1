var gulp = require('gulp')
  , swig = require("gulp-swig")

gulp.task('default', function() {
  
  var options = {
    data: { 
      tr: require('./data')
    }, ext: ".html"
  };
  
  return gulp.src("./template/*.html", { read : false})
         .pipe(swig(options))
         .pipe(gulp.dest("./"));
});