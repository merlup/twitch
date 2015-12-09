var mongoose = require('mongoose');

module.exports = mongoose.model('blog_post', {
  title: String,
  description: String,
  author: String,
  tags_array: [String],
  image: String,
  date: Date

});