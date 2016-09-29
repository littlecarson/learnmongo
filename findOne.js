var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

Book.findOne({author:'Jim'}, function (err, doc) {
     /* body... */ 
     if (err) {
        console.log(err);
        return;
     }

     doc.author = "Carson";

     doc.save();

     console.log('findOne result:', doc);
});