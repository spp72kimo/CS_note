const {src, dest, parallel} = require ('gulp');
const babel = require ('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const uglify = require ('gulp-uglify');
const rename = require ('gulp-rename');
const cleanCSS = require('gulp-clean-css');


function compilerJs(cb) {
  src('src/*.js')
  .pipe(babel())
  .pipe(dest('lib/'))
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(dest('lib/'))
  cb();
}

function compilerCSS(cb) {
  src('styles/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('styles/'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({extname: '.min.css'}))
  .pipe(dest('style/'))
  cb();
}

exports.default = parallel(compilerJs, compilerCSS);