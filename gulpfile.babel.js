import gulp from 'gulp'
import babel from 'gulp-babel'
import eslint from 'gulp-eslint'
import mocha from 'gulp-mocha'
import del from 'del'
import path from 'path'

const paths = {
  src: path.join(__dirname, 'src/**/*.js'),
  dest: path.join(__dirname, 'lib'),
  tests: path.join(__dirname, 'lib/**/test/test.js')
}

const cleanTask = () => {
  const { dest } = paths
  return del(dest)
}
gulp.task('clean', cleanTask)

const eslintTask = () => {
  const { src } = paths
  return gulp
    .src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}
gulp.task('eslint', eslintTask)

const babelTask = () => {
  const { src, dest } = paths
  return gulp
    .src(src, { sourcemaps: true })
    .pipe(babel())
    .pipe(gulp.dest(dest))
}
gulp.task('babel', babelTask)

const mochaTask = () => {
  const { tests } = paths
  return gulp.src(tests, { read: false }).pipe(mocha({ reporter: 'nyan' }))
}
gulp.task('test', mochaTask)

const watchTask = () => {
  const { src } = paths
  return gulp.watch(src, buildTask)
}
gulp.task('watch', watchTask)

const buildTask = gulp.series(cleanTask, eslintTask, babelTask, mochaTask)
gulp.task('build', buildTask)
