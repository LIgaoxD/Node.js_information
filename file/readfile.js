//读文件 异步方法readFile,非堵塞，回调函数
var fs = require('fs');
fs.readFile('file/lrc.txt', function (err, data) {      //读文件的结果会自动装到data中
    if (err) {
        console.log(err);       //有错误
        return;     //中断函数 不再执行
    }
    // console.log(data.toString());   //没有错误
    //切割每行歌词，\n   
    var lines = data.toString().split('\n');      //数组
    // console.log(lines);     //切割后的歌词
    for (i = 0; i < lines.length; i++) {        //处理每行歌词，提取时间和歌词，定时播放
        var m = lines[i].substr(1, 2);
        var s = lines[i].substr(4, 2);
        var ms = lines[i].substr(7, 2);
        let gc = lines[i].substr(11, 999);
        var playTime = Number(m) * 60 * 1000 + Number(s) * 1000 + Number(ms);
        setTimeout(function () { console.log(gc) }, playTime);
    }
});

