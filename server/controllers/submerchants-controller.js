var mongoose = require('mongoose'),
	SubMerchant = require('../models/submerchant');

module.exports.create = function (req, res) {
  var submerchant = new SubMerchant(req.body);
  submerchant.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  SubMerchant.find({}, function (err, results) {
    res.json(results);
  });
}


module.exports.update = function(req, res) {
	
	var submerchant = req.submerchant;
	submerchant.firstName  = req.body.firstName;
	submerchant.lastName  = req.body.lastName;
	submerchant.email  = req.body.email
	submerchant.phone  = req.body.phone
	submerchant.dateOfBirth  = req.body.dateOfBirth
	submerchant.ssn  = req.body.ssn
	submerchant.streetAddress  = req.body.streetAddress
	submerchant.locality  = req.body.locality
	submerchant.region  = req.body.region
	submerchant.postalCode  = req.body.postalCode
	submerchant.email  = req.body.email
	submerchant.mobilePhone  = req.body.mobilePhone
	submerchant.accountNumber  = req.body.accountNumber
	submerchant.routingNumber  = req.body.routingNumber
	submerchant.tosAccepted  = req.body.tosAccepted
	store_item.save(function (err) {
		res.json(store_item);
	});
};

module.exports.delete = function(req, res) {
	var submerchant = req.submerchant;
	submerchant.remove(function (err){
		res.json(submerchant);
	});
};