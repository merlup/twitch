var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var userSchema = new Schema({
	  	name: { type: String, default: '', required: 'Add a title to your post'},
	  	email: { type: String, default: '', required: 'Add a description to your post'},
	  	username: { type: String, default: '', required: 'Add a author'},
	  	password: { type: String, default: ''},  	
	  	date:  { type: Date, default: ''}
	});
var User = mongoose.model('User', userSchema);

module.exports = User