var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


	var StoreItemSchema = new Schema({
		title: {
			type: String,
			default: '',
			required: 'Add a Title'
		},
		description:  {
			type: String,
			default: '',
			required: 'Describe the product'
		},
		image: {
			type: String,
			default: '',
			required: 'Add an Image'
		},
		price: {
			type: String,
			default: '',
			required: 'Add a price'
		},
		quantity: {
			type: String,
			default: '',
			required: 'Add a quantity'
		}

	});

	module.exports = mongoose.model('StoreItem', StoreItemSchema); 