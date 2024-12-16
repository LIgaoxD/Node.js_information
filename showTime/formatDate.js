let moment=require('moment');
//调用插件使用方法
let X=moment().format('MMMM Do YYYY,h:mm:ss a');
console.log(X);

console.log(module.paths);
//该文件中第三方模块寻找路径， 数组