var mongoose = require('mongoose');

module.exports = mongoose.model('store_item', {
  title: String,
  description: String,
  image: String,
  price: String
});