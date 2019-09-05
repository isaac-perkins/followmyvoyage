"use strict";

const gulp = require("gulp");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
let dest      = './public/';

function libs() {

  var vendor = dest + 'vendor/';

  // fontAwesome
  var fontAwesomeCss = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.min.css')
    .pipe(gulp.dest(vendor + 'fontAwesome'));

  var fontAwesomeWebfonts = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest(vendor + 'webfonts'));
  // popper.js
  var popper = gulp.src('./node_modules/popper.js/dist/umd/popper.min.js')
    .pipe(gulp.dest(vendor + 'popper.js'));

  // Bootstrap Css
  var bootstrapCss = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest(vendor + 'bootstrap'));

  // Bootstrap Js
  var bootstrapJs = gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest(vendor + 'bootstrap'));

  // jQuery
  var jquery = gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(vendor + 'jquery'));

  // vue
  var vue = gulp.src('./node_modules/vue/dist/vue.min.js')
      .pipe(gulp.dest(vendor + 'vue'));

  // leaflet
  var leaflet = gulp.src(['./node_modules/leaflet/dist/leaflet.js',
          './node_modules/leaflet/dist/leaflet.css'])
      .pipe(gulp.dest(vendor + 'leaflet'));

  //vue2leaflet
  var vue2Leaflet = gulp.src('./node_modules/vue2-leaflet/dist/vue2-leaflet.umd.min.js')
      .pipe(gulp.dest(vendor + 'vue2-leaflet'));

  return merge(fontAwesomeCss, fontAwesomeWebfonts, popper, bootstrapCss, bootstrapJs, jquery, vue, leaflet, vue2Leaflet);
}

// js task
function js() {

}

// css task
function css() {
  return gulp
  .src("./assets/scss/**/*.scss")
  .pipe(plumber())
  .pipe(sass({
    outputStyle: "expanded",
    includePaths: "./node_modules",
  }))
  .on("error", sass.logError)
  .pipe(gulp.dest(dest + 'css'))
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest(dest + 'css'));
}

function landing() {
  return gulp
    .src('./assets/landing/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('landing.min.css'))
    .pipe(gulp.dest(dest + 'css/landing'));
};

const build = gulp.series(js, css, landing, libs);

exports.css = css;
exports.js = js;
exports.libs = libs;
exports.landing = landing;
exports.build = build;
