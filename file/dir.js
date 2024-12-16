//目录操作 fs 创建文件夹，fs.readdir()遍历文件夹，删除文件夹

//创建连续文件夹创建

var fs = require('fs');

for (var i = 1; i <= 40; i++) {
  i = (i < 10) ? '0' + i : i;     //(条件)？A:B
  fs.mkdir('file/210912308' + i, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('创建成功');
  });
};

//非连续学号   数组
