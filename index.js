var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    isbn: {
        type: Number,
        unique: true    // 唯一约束
    },
    name: {
        type: String,
        index: true     // 索引
    }
});