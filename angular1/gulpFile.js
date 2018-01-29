const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence').use(gulp)

require('./gulpTask/app')
require('./gulpTask/deps')
require('./gulpTask/server')

gulp.task('default', function(){
    if(util.env.production){
        sequence('deps', 'app', 'server')
    }else{
        sequence('deps', 'app', 'server')
    }
})