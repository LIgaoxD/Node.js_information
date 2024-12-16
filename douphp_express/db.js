var mysql = require('mysql');	//第三方模块，先安装
 var conn = mysql.createConnection({		//创建数据库连接对象conn，链接数据以及数据查询
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'douinfo' 		//数据库
 });
 conn.connect();
module.exports.conn=conn;	//将代码中创建的Conn对象暴露出去

