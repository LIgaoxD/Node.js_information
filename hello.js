console.log('hello world! welcome to ccit');
console.log(Boolean(-1));
console.log('we are learning node.js.');
console.table({"name":'高雪冬','gender':'男',"age":20});
//对象，键值    对刻画一个学生信息
var stu={"name":'高雪冬','gender':'男',"age":20,'sno':'21091230807'}
console.log(stu.sno);    //21091230807  对象.键名=值
//数组  ，刻画三个学生信息
var students=[{"name":'高雪冬','gender':'男',"age":20},{"name":'高雪冬','gender':'男',"age":20},{"name":'高雪冬','gender':'男',"age":20}];
console.table(students[1]);

console.table(students); 
//输出三个学生数组

//遍历数组
for (var i=0;i<students.length;i++){
	console.log(students[i].name);
}

console.dir(stu);
//输出对象信息控制台
console.info(stu);
//输出提示信息
console.error(stu);
//输出错误信息
console.warn(stu);
//输出警告信息
console.table(stu);
//输出表格

