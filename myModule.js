var stuClass = '软件218';
function sayHi(z) {
    console.log('欢迎' + z + '学习node.js');
}

function showTime() {
    var date = new Date();
    console.log(date);
}

//定义的函数暴露出去
// exports.sayHi=sayHi;
// exports.showTime=showTime;

//定义的函数、变量打包暴露出去
module.exports = {     //模块 出口
    stuClass,
    sayHi,
    showTime
}