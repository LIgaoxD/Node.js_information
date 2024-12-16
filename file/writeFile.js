//写文件 fs 核心模块，无需安装，node 自带
// 文件、目录操作 、异步和同步
//异步覆盖写 方法 writeFile, 非堵塞。 回调函数，一定是异步方法的最后一个参数
//异步追加方法 appendfile,非堵塞
var fs = require('fs');
// var str="北北在学习node.js!";
var str = "\n北北在学习node.js!";
console.log(1);
// fs.writeFile('file/a.txt',str,function(err){    //err 自动捕获异步错误
fs.appendFile('file/a.txt', str, function (err) {
    if (err) {
        console.log(err);       //有错误
        return;         //中断函数执行

    }
    console.log('文件写入成功');        //无错误
    console.log(2);

});
console.log(3);         //到前面执行了

