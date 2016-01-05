app.controller('postsController', ['$scope', '$resource', 'BlogPost',  '$http', function($scope, $resource, BlogPost) {
  
  var BlogPost = $resource('/blog_posts');

  BlogPost.query(function (results) {
    $scope.blog_posts = results;
  });

  $scope.blog_posts = [];

  $scope.createBlogPost = function () {
    var blog_post = new BlogPost({
    	title: this.title,
    	description: this.description,
    	tags_array: this.tags_array,
   		author: this.author,
    	image: this.image
    });
    
    blog_post.$save(function (result) {
    	$scope.blog_posts.push(result);
     	$scope.title = '',
     	$scope.description = '',
     	$scope.tags_array = '',
     	$scope.author = '',
     	$scope.image = ''
     console.log(result);
    });
  }

  $scope.deleteBlogPost = function (blog_post) {
        for (var i in $scope.blog_posts) {
          if ($scope.blog_posts[i] === blog_post) {
            $scope.blog_posts.splice(i, 1);
          }
        }
  }


}]);