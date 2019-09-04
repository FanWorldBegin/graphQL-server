const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//声明类型
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
  //id 会自动生成
})

module.exports = mongoose.model('Book', bookSchema);