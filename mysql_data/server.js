//构建http服务器，查询数据，响应到客户端
var http = require('http');
var server = http.createServer();
server.on('request', function (request, response) {
	//跨越问题的解决
	response.setHeader('Access-Control-Allow-Origin', '*')	//表示所有地址都可以访问
	response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });		//处理乱码
	// response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });		//可以添加html样式
	//数据查询，响应数据
	var mysql = require('mysql');	//第三方模块，先安装
	var conn = mysql.createConnection({		//创建数据库连接对象conn，链接数据以及数据查询
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'douinfo'
	});
	conn.connect();
	
	var data = [];		//定义数组
	//数据查询 ，最新的商品
	var sqlstr = "select id,cat_id,name,price,image from product order by id desc limit 0,4";
	conn.query(sqlstr, function (err, result) {		//异步方法，回调函数，result是查询结束后返回的结果
		if (err) {
			console.log(err);
			return;
		}
		console.log(result);		//数组 【{}，{}，{}、、、、】

		// response.end(JSON.stringify(result));		//转化成字符串再响应
		data[0] = result;		//四个商品
		//商品查询结束以后，再查询新闻
		var sqlNews = "select id,cat_id,title,click,add_time,content from article order by id desc limit 0,4";
		conn.query(sqlNews, function (err, resultNews) {		//异步方法，回调函数，result是查询结束后返回的结果
			if (err) {
				console.log(err);
				return;
			}
			console.log(resultNews);		//数组 【{}，{}，{}、、、、】
			
			// response.end(JSON.stringify(result));		//转化成字符串再响应
			data[1] = resultNews;		//五条新闻
			response.end(JSON.stringify(data));
		});

	})
});

server.listen(3009, function (err) {
	console.log('服务器创建成功,http://localhost:3009')
});