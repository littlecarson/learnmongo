var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnmongo');

var BookSchema = new mongoose.Schema({
    name: String,
    isbn: Number
});

BookSchema.statics.findByISBN = function (isbn, cb) {
     this.findOne({isbn: isbn}, function (err, doc) {
          cb(err, doc); 
     });
};
BookSchema.methods.print = function () {
     console.log('Book Information:'); 
     console.log('obj');
     console.log(this.name);
};

var Book = mongoose.model('Book', BookSchema);

var book = new Book({
    name: "javascript",
    isbn: 9798100
});

book.save(function (err) {
     if(err) {
        console.log(err);
     }
     Book.findByISBN(9798100, function (err, doc) {
          console.log(doc); 
     });

     book.print();
});