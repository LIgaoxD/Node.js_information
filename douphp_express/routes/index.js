var express = require('express');
var router = express.Router();
var db = require('../db.js');   //回到上层目录，db自定义模块，里面暴露了conn

//路由文件，什么地址出现什么页面，把上面数据发到页面
/* GET home page. */
router.get('/', function (req, res, next) {        //当访问首页的时候  localhost：3005/
  //1.查询数据
  // var mysql = require('mysql');	//第三方模块，先安装
  // var conn = mysql.createConnection({		//创建数据库连接对象conn，链接数据以及数据查询
  //   host: 'localhost',
  //   user: 'root',
  //   password: '',
  //   database: 'douinfo'
  // });
  // conn.connect();

  var data = [];		//定义数组
  //数据查询 ，最新的商品
  var sqlstr = "select id,cat_id,name,price,image from product order by id desc limit 0,4";
  db.conn.query(sqlstr, function (err, result) {		//异步方法，回调函数，result是查询结束后返回的结果
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);		//数组 【{}，{}，{}、、、、】

    // response.end(JSON.stringify(result));		//转化成字符串再响应
    data[0] = result;		//四个商品
    //商品查询结束以后，再查询新闻
    var sqlNews = "select id,cat_id,title,click,add_time,content from article order by id desc limit 0,5";
    db.conn.query(sqlNews, function (err, resultNews) {		//异步方法，回调函数，result是查询结束后返回的结果
      if (err) {
        console.log(err);
        return;
      }
      console.log(resultNews);		//数组 【{}，{}，{}、、、、】   由sql语句来决定

      // response.end(JSON.stringify(result));		//转化成字符串再响应
      data[1] = resultNews;		//五条新闻
      // response.end(JSON.stringify(data));    //响应数据


      //2.渲染模板，带数据过去
      res.render('index.ejs', { pageData: data });      //render  渲染模板引擎 index.ejs
    });


  });

})


//所有商品或分类查询
router.get('/allproduct', function (req, res, next) {  //当访问页面的时候 localhost；3005/
var cat_id=req.query.cat_id;    //取地址栏参数cat_id的值 http://localhost:3005/allproduct?cat_id=1
if(cat_id){   //地址栏带了参数cat_id，分类查询
  var sqlstr="select id,image,price,name,content from product where cat_id=" + cat_id; //+"order by id desc"最新商品更新
}else{    //地址栏没有参数cat_id，所有商品
   //1.查询表中所有商品
  var sqlstr="select id,image,price,name,content from product";
}
  //1.查询表中所有商品
  // var sqlstr = "select id,image,price,name,content from product";
  db.conn.query(sqlstr, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
     console.log(result);
  //渲染模板，查询数据发过去
  res.render('productList.ejs', { products: result });  //render 渲染模板引擎 index.ejs
  })
 
})


//商品详情
router.get('/product', function (req, res, next) {        //当访问首页的时候  localhost：3005/
  var id=req.query.id;  //取地址栏参数
  var sqlstr="select id,image,name,price,content from product where id=" + id;
  db.conn.query(sqlstr, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
     console.log(result);
  //渲染模板，查询数据发过去
  res.render('product.ejs', { oneProduct: result });  //render 渲染模板引擎 index.ejs
  })
    
});





//所有信息的查询（高雪冬所写）

router.get('/allnews', function (req, res, next) {  //当访问页面的时候 localhost；3005/
  var cat_id=req.query.cat_id;    //取地址栏参数cat_id的值 http://localhost:3005/allproduct?cat_id=1
  if(cat_id){   //地址栏带了参数cat_id，分类查询
    var sqlstr="select id,add_time,title,click,content from article where cat_id=" + cat_id; //+"order by id desc"最新信息更新
  }else{    //地址栏没有参数cat_id，所有信息
     //1.查询表中所有信息
    var sqlstr="select id,add_time,title,click,content from article";
  }
    //1.查询表中所有信息
    // var sqlstr = "select id,image,price,name,content from product";
    db.conn.query(sqlstr, function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
       console.log(result);
    //渲染模板，查询数据发过去
    res.render('newsList.ejs', { news: result });  //render 渲染模板引擎 index.ejs
    })
   
  })
  
  
  //信息详情（高雪冬所写）
  router.get('/news', function (req, res, next) {        //当访问首页的时候  localhost：3005/
    var id=req.query.id;  //取地址栏参数
    var sqlstr="select id,add_time,title,click,content from article where id=" + id;
    db.conn.query(sqlstr, function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
       console.log(result);
    //渲染模板，查询数据发过去
    res.render('news.ejs', { oneNews: result });  //render 渲染模板引擎 index.ejs
    })
      
  });













// router.get('/allproduct', function (req, res, next) {        //当访问首页的时候  localhost：3005/
//   res.render('productList.ejs', { title: 'Gao xuedong', student: 'zho yu' });      //render  渲染模板引擎 index.ejs
// });
router.get('/allnews', function (req, res, next) {        //当访问首页的时候  localhost：3005/
  res.render('newsList.ejs', { title: 'Gao xuedong', student: 'zho yu' });      //render  渲染模板引擎 index.ejs
});


router.get('/page/:pid', function (req, res, next) {        //当访问首页的时候  localhost：3005//page/5
  var pid=req.params.pid;  //5
  var sqlstr="select id,page_name,content from page where id=?";    //?代表这里是一个变量
  var sqlParam=[pid];   //数组 放的是上面的sql 语句中的？对应的值

  db.conn.query(sqlstr,sqlParam,function(err,result){
    if (err) {
      console.log(err);
      return;
    }
     console.log(result);   //[{}]  数组  只有一个元素

      res.render('page.ejs', { pageContent:result });      //render  渲染模板引擎 index.ejs
  })

});

module.exports = router;
