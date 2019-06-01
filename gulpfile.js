const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass');
// const data = require('gulp-data');

sass.compiler = require('node-sass');

gulp.task('njk', function () {
    return gulp.src('app/pages/**/*.+(html|nunjucks|njk)')
        // .pipe(data(function(){
        //     return require('./app/data.json')
        // }))
        .pipe(nunjucksRender({
            path: ['app/templates/']
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('app/css'));
});

gulp.task('watcher', function(){
    gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('app/pages/**/*.+(html|nunjucks|njk)', gulp.series('njk'));
});

gulp.task('default', gulp.series('njk', 'sass', 'watcher'));

