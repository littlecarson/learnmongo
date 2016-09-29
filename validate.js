var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnmongo');

var OrderSchema =  new mongoose.Schema({
    count: {
        type: Number,
        required: true,// 必须值
        max: 1000, // 最大值
        min: 0  // 最小值
    },
    status: {
        type: String,
        enum:['created', 'success', 'failed']   // 枚举属性
    },
    desc: {
        type: String,
        match: /book/g, //必须匹配正则表达式
        validate: function(desc) {  // 自定义验器 ，值为一个函数
            return desc.length >= 10;
        }
    }
});

var Order = mongoose.model('Order', OrderSchema);

var order = new Order();
order.count = 2;    // 必须在最大最小值中间
// order.status = 'new'; // 不在枚举的范围内，会报错
order.save(function (err) {
     if (err) {
          return console.log('save failed:', err);
      } 

      console.log('save success');
});