const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

const paths = {
  styles: {
    src: 'assets/scss/*.scss',
    dest: 'assets/css'
  },
  scripts: {
    src: 'assets/ts/*.ts',
    dest: 'assets/js'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      includePaths: ['./node_modules']
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return browserify({
    basedir: __dirname,
    debug: true,
    entries: ['assets/ts/index.ts'],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify, {
    moduleResolution: 'node',
    esModuleInterop: true
  })
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
