var mysql = require('mysql');	//第三方模块，先安装
var conn = mysql.createConnection({		//创建数据库连接对象conn，链接数据以及数据查询
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'douinfo'
});

conn.connect();
//数据查询
//var sqlstr="select id,cat_id,cat_name,parent_id from product-category";
// var sqlstr="select id,cat_id,name,price,image from product order by id desc limit 0,5";
var sqlstr = "select id,cat_id,name,price,image from product limit 0,5";


//删除数据
// var sqlstr="delete from product where id=1";

//更新数据
// var sqlstr="update product set  price=550 where id=13 or id=12";

//数据插入
//var sqlstr="insert into product(id,name,price ,image ,cat_id) values(default,'躺椅',666,'images/product/20.jpg',2)";

conn.query(sqlstr, function (err, result) {		//异步方法，回调函数，result是查询结束后返回的结果
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);		//数组 【{}，{}，{}、、、、】
})