//创建一个http服务器，等待客户端发送请求，当接收到请求，进行响应！
var http = require('http');
var fs = require('fs');	//读文件
const path = require('path');
var server = http.createServer();		//创建服务器

server.on('request', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });		//可以添加html样式
	// response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });		//处理乱码

	//导航,客户端的url地址 /，/login ，/info

	response.write("<a href='/'>home</a>	<a href='/login'>login</a>	<a href='/info'>news</a><br>")
	var url = request.url;	//获取浏览中的url地址

	var stu = {
		name: '甜甜的笑！',
		age: '19',
		tel: '173***761'
	};
	// 对象-->字符串	JSON.stringify()	相反过来	JSON.parse();
	if (url == '/') {
		response.write(JSON.stringify(stu));
		response.write('<br><h1 style="color:red">欢迎访问服务器!</h1>');
		response.write('<br><h2>你好北北!我们来学习node.js!</h2>');

	} else if (url == '/login') {

		//response.write('<form action="">用户名:<input type="te ixt"><br>密&nbsp;&nbsp;&nbsp;码:<input type="password"/><br><input type="submit"></form>')
		var data = fs.readFileSync('http/mb1/login.html');
		response.end(data);	//先将data响应出去，然后结束响应！

	} else if (url = '/css/templatemo-style.css') {
		var data = fs.readFileSync(path.join(__dirname, 'http/mb1/css/templatemo-style.css'));
		//response.write('')
		response.end(data);	//先将data响应出去，然后结束响应！
	} else if (url = '/css/font-awesome.min.css') {
		var data = fs.readFileSync(path.join(__dirname, 'http/mb1/css/font-awesome.min.css'));
		//response.write('')
		response.end(data);	//先将data响应出去，然后结束响应！
	} else if (url = '/css/bootstrap.min.css') {
		var data = fs.readFileSync(path.join(__dirname, 'http/mb1/css/bootstrap.min.css'));
		//response.write('')
		response.end(data);	//先将data响应出去，然后结束响应！
	}

});

server.listen(3008, function (err) {
	if (err) {
		console.log('创建失败！');
		return;
	}
	console.log('创建成功!请求地址:http://localhost:3008');
});

