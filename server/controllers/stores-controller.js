var mongoose = require('mongoose'),
	StoreItem = require('../models/storeitem');

module.exports.create = function (req, res) {
  var store_item = new StoreItem(req.body);
  store_item.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  StoreItem.find({}, function (err, results) {
    res.json(results);
  });
}

module.exports.update = function(req, res) {
	
	var store_item = req.store_item;
	store_item.title = req.body.title;
	store_item.description = req.body.description;
	store_item.image = req.body.image;
	store_item.price = req.body.price;
	store_item.quantity = req.body.quantity;
	store_item.save(function (err) {
		res.json(store_item);
	
	});
};

module.exports.delete = function(req, res) {

	var store_item = req.store_item;
	store_item.remove(function (err){
		res.json(store_item);
	});
};