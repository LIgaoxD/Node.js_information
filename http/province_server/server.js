//构建服务器，读取city.json的数据，并响应到客户端

var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (request, response) {

	//跨越问题的解决
	response.setHeader('Access-Control-Allow-Origin', '*')	//表示所有地址都可以访问

	response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });		//html

	//var data = fs.readFileSync('http/province_server/data/city.json');	//同步  字符串
	var data = fs.readFileSync('http/province_server/data/new.json');

	//response.write(JSON.parse(data).locality.provinces[0].province[0].$.text);	//安徽
	// response.write('\n')
	response.end(data);

});
server.listen(3009, function (err) {
	console.log('服务器创建成功!http://localhost:3009')
})