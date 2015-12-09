var BlogPost = require('../models/post');

module.exports.create = function (req, res) {
  var blog_post = new BlogPost(req.body);
  blog_post.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  BlogPost.find({}, function (err, results) {
    res.json(results);
  });
}

// exports.delete = function(req,res){
//     BlogPost.find(req.params.id, function (err, result) {
//     res.json(result);
//   });
// };