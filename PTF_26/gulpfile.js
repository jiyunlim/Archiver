const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fileInclude = require('gulp-file-include');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function getAssetVersion() {
  return Date.now().toString();
}

// SCSS to CSS 컴파일
function compileSass() {
  return gulp.src('src/assets/css/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('src/assets/css'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
}

// HTML include 처리
function htmlInclude() {
  const version = getAssetVersion();

  return gulp.src('src/pages/**/*.html')
    .pipe(fileInclude({
      basepath: '@file'
    }))
    .pipe(replace(/\.\.\/assets\//g, 'assets/'))
    .pipe(replace(/(main\.css)\?v=[^"']*/g, `$1?v=${version}`))
    .pipe(replace(/(common\.js)\?v=[^"']*/g, `$1?v=${version}`))
    .pipe(replace(/(career\.js)\?v=[^"']*/g, `$1?v=${version}`))
    .pipe(replace(/(swiper-bundle\.min\.css)\?v=[^"']*/g, `$1?v=${version}`))
    .pipe(replace(/(swiper-bundle\.min\.js)\?v=[^"']*/g, `$1?v=${version}`))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

// JavaScript 압축
function minifyJs() {
  return gulp.src('src/assets/js/**/*.js')
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(browserSync.stream());
}

// 이미지 복사
function copyImages() {
  return gulp.src('src/assets/img/**/*')
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(gulp.dest('dist/img')); // also copy to dist/img for legacy paths
}

// Swiper CSS 복사
function copySwiperCss() {
  return gulp.src('src/assets/css/swiper-local.css')
    .pipe(gulp.dest('dist/assets/css'));
}

// Browser Sync 서버 시작
function serve(done) {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    port: 3000,
    notify: false
  });

  watchFiles();
  done();
}

// 빌드 작업
const build = gulp.parallel(compileSass, htmlInclude, minifyJs, copyImages, copySwiperCss);

// 감시 작업
function watchFiles() {
  gulp.watch('src/assets/css/scss/**/*.scss', compileSass);
  gulp.watch('src/pages/**/*.html', htmlInclude);
  gulp.watch('src/includes/**/*.html', htmlInclude);
  gulp.watch('src/assets/js/**/*.js', minifyJs);
  gulp.watch('src/assets/img/**/*', copyImages);
}

// 기본 작업 (개발 서버)
const defaultTask = gulp.series(build, serve);

// 작업 내보내기
exports.default = defaultTask;
exports.build = build;
exports.watch = watchFiles;
exports.serve = serve;
