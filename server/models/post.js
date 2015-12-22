var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

  var BlogPostSchema = new Schema({
  	title: {
  		type: String,
  		default: ''
  	},
  	description: {
  		type: String
  	},
  	author: {
  		type: String,
  		default: ''
  	},

  	tags_array: {

  		type: [String],
  		default: ''
  	},

  	image: {
  		type: String,
  		default: ''
  	},  	
  	date:  {
  		type: Date,
  		default: ''
  	}

});
module.exports = mongoose.model('blog_post', BlogPostSchema);