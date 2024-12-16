//path是一个核心模块，无需安装，直接引用
var path = require('path');

console.log(__dirname);      //拿到的当前 正在运行（path.js)文件 所在的(根)目录
var newPath=path.join(__dirname,'blog','html','upload');
console.log(newPath);

var img="D:\\Node.js学习\\bolg\\html\\images\\loader.gif";
console.log(path.extname(img));     //.gif
console.log(path.basename(img));        //loader.gif
console.log(path.dirname(img));
