var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnmongo');

var ResellerSchema = new mongoose.Schema({
    address: String
});

// 后置中间件，在保存后调用
ResellerSchema.post('save', function (next) {
     console.log('this is ResellerSchema post save middleware'); 
     next();
});
// 前置中间件
ResellerSchema.pre('save', true, function (next, done) {
     console.log('this is Resellerschema pre save middleware'); 
     next();
     done();
});

var Reseller = mongoose.model('Reseller', ResellerSchema);

var reseller = new Reseller({
    address: '111,people road'
});

reseller.save(function (err) {
     if (err) {
          console.log(err);
      } 
});