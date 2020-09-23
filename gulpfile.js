/* eslint-disable */
var del=require('del');


const {task,src,dest}=require('gulp');

// https://gulpjs.com/docs/en/api/task
task('default',function(cb){
  del(['../E-motor-Integration-Merchant-web/src/eui/lib/**/*'],{force:true}).then(function(){
    src(['./lib/**/*'],{base:'./'})
      .pipe(dest('../E-motor-Integration-Merchant-web/src/eui/'));
  });
  console.log('default: lib okay. E-motor-Integration-Merchant-web');
  cb();
});