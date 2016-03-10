var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var scriptsPath = 'js/module';

//function getFolders(dir) {
//    return fs.readdirSync(dir)
//        .filter(function(file) {
//            return fs.statSync(path.join(dir, file)).isDirectory();
//        });
//}

//gulp.task('scripts', function() {
//        return gulp.src(path.join('js/module/*.js'))
//            //.pipe(concat(folder + '.js'))
//            //.pipe(gulp.dest('/'))
//            //.pipe(concat('main.js'))
//            .pipe(uglify())
//            .pipe(rename({suffix: '.min'}))
//            .pipe(gulp.dest('build'));
//});


//var cssPath = 'js/module';
//gulp.task('css', function() {
//    var folders = getFolders(cssPath);
//
//    var tasks = folders.map(function(folder) {
//        return gulp.src(path.join(scriptsPath, folder, '/*.css'))
//            .pipe(concat(folder + '.css'))
//            .pipe(gulp.dest(scriptsPath))
//            .pipe(uglify())
//            .pipe(rename(folder + '.min.css'))
//            .pipe(gulp.dest(scriptsPath));
//    });
//
//    return merge(tasks);
//});