var myModule = require('./myModule.js');

//调用的时候     模块名.函数名
myModule.sayHi('高雪冬');  //实参
myModule.sayHi(myModule.stuClass);  //实参

setInterval(myModule.showTime, 1000);
// myModule.showTime();
console.log(myModule.stuClass);


