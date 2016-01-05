var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var userSchema = new Schema({
	  	name: String,
	  	email: String,
	  	username: String,
	  	password: String,  	
	  	date: Date
	});
var User = mongoose.model('User', userSchema);

module.exports = User