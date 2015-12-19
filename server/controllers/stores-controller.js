var StoreItem = require('../models/storeitem');

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