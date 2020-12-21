/* eslint-disable */
var del=require('del');


const {task,src,dest}=require('gulp');

// https://gulpjs.com/docs/en/api/task
task('default',function(cb){
  del(['../immotor-ui-web/examples/node_modules/element-ui/lib/**/*'],{force:true}).then(function(){
    src(['./lib/**/*'],{base:'./'})
      .pipe(dest('../immotor-ui-web/examples/node_modules/element-ui/'));
  });
  console.log('default: lib okay. immotor-ui-web');
  cb();
});