var mongoose = require('mongoose');

var schema = {
  email: String,
  name: String,
  username: String,
  password: String,
  avatar: String,
  date: Date
}

var Users = mongoose.model("Users", schema);

module.exports = Users