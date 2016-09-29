var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

var condition = {
    $or: [
        {author: 'Jim'}
    ]
};

Book.find(condition, function (err, docs) {
     if (err) {
          console.log(err);
      }

      console.log(docs); 
});