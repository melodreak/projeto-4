const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função para compilar SCSS
function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css'));
}

// Tarefa de observação
function watch() {
    gulp.watch('src/styles/*.scss', styles);
}

// Exportações
exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, watch);
