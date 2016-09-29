var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User = mongoose.model('User', {
    blog: {
        type : String,
        get  : function (url) {
             if (!url) return url;

             if (0 !== url.indexOf('http://') && 0 !== url.indexOf("https://"))
                url = 'http://' + url;
            return url;
        }
    }
});

var user = new User({
    blog: 'chenkansheng'
});

user.save(function (err) {
     if(err) {
        console.log(err);
     } 

     console.log(user.blog);
});