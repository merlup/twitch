var mongoose = require('mongoose'),
	BlogPost = require('../models/post');

module.exports.read = function(req, res) {
	res.json(req.blog_post);
};

module.exports.create = function (req, res) {
  var blog_post = new BlogPost(req.body);
  blog_post.save(function (err, result) {
  	console.log(result);
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  BlogPost.find({}, function (err, results) {
    res.json(results);
  });
}

module.exports.update = function(req, res) {
	
	var blog_post = req.blog_post;
	blog_post.title = req.body.title;
	blog_post.description = req.body.description;
	blog_post.author = req.body.author;
	blog_post.tags_array = req.body.tags_array;
	blog_post.save(function (err) {
		res.json(blog_post);
	
	});
};

module.exports.delete = function(req, res) {

	var blog_post = req.blog_post;
	blog_post.remove(function (err){
		res.json(blog_post);
	});
};

module.exports.blog_postByID = function (req, res, next, id) {
	BlogPost.findById(id).exec(function (err, blog_post) {
    req.blog_post = blog_post;
    next();
  });
};
// exports.delete = function(req,res){
//     BlogPost.find(req.params.id, function (err, result) {
//     res.json(result);
//   });
// };