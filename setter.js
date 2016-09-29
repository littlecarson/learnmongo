var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnmongo');

var User = mongoose.model('User', {
    nickname: {
        type: String,
        trim: true  // 设置字段类型开头和结尾的空格去除
    },
    blog: {
        type: String,
        set: function (url) {// 设置属性，对写入的字段值做一些处理
            if (!url) {
               return url;
            } 
            // indexOf() indexOf OOOOOOOO 容易出错还看不出来啊
            if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
                url = 'http://' + url;
            }

            return url;
        }
    }
});

var user = new User({
    nickname: " carson ",
    blog: "www.bffj.com"
});

console.log(user);