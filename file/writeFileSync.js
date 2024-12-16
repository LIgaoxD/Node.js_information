//写文件 fs 核心模块，无需安装，node 自带
// 文件、目录操作 、异步和同步
//同步覆盖写 方法 writeFileSync, 堵塞。 无回调函数
//同步追加方法 appendfileSync,堵塞
var fs = require('fs');
var stu = "{name:'高雪冬',gender:'男',age:19}";     //对象  外加引号改为字符串
console.log(1);
try {
    fs.writeFileSync('file/b.txt', JSON.stringify(stu));     //写入文件的参数一般为字符串
    console.log('成功写入!');
    console.log(2);
} catch (error) {
    console.log(err);
};
console.log(3);


