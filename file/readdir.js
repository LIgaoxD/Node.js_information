//遍历文件夹

var fs = require('fs');
const path = require('path');
fs.readdir('file/images', function (err, files) {      //遍历文件的结果会自动装到files中
	if (err) {
		console.log(err);       //有错误
		return;     //中断函数 不再执行
	}
	console.log(files);   //没有错误  数组
	for (i = 0; i < files.length; i++) {
		if (path.extname(files[i]) == '.jpg') {
			console.warn(files[i]);
			// console.log([i]);
			fs.unlink('./images/' + files[i], function (err) {		//删除文件
				console.log('删除成功！');
			})
		}
	}
});


