angular.module('webApp').controller('indexCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'crazy'
	];
}]);

angular.module('webApp').controller('channelsCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'channels'
	];
}]);
angular.module('webApp').controller('livenowCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'livenow'
	];
}]);
angular.module('webApp').controller('loginCtrl', ['$scope', function($scope) {
	

	$scope.messages = [
	'login'
	];
}]);
angular.module('webApp').controller('signupCtrl', ['$scope', '$resource', function($scope, $resource) {
	var User = $resource('/api/users');

	User.query(function (results) {
		$scope.users = results;
	});

	 $scope.users = []

	$scope.createUser = function () {
		var user = new User();
		user.email = $scope.userEmail;
		user.username = $scope.userUsername;
		user.name = $scope.userName;
		user.password = $scope.userPassword;
		user.$save(function (result) {
			$scope.users.push(result);
			$scope.userUsername='';
			$scope.userEmail='';
			$scope.userName='';
			$scope.userPassword='';
			console.log(result);
		});
	}
	
	$scope.messages = [
	'signup'
	];
}]);
angular.module('webApp').controller('userchannelCtrl', function($scope) {
	$scope.messages = [
	'userchannel'
	];
});
angular.module('webApp').controller('mainCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'main'
	];
}]);
angular.module('webApp').controller('profileCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'profile'
	];
}]);
angular.module('webApp').controller('postsController', ['$scope', '$resource', function ($scope, $resource) {
  
  var BlogPost = $resource('/api/blog_posts');

  BlogPost.query(function (results) {
    $scope.blog_posts = results;
  });

  $scope.blog_posts = []

  $scope.createBlogPost = function () {
    var blog_post = new BlogPost();
    blog_post.title = $scope.blog_postTitle;
    blog_post.description = $scope.blog_postDescription;
    blog_post.tags_array = $scope.blog_postTags;
    blog_post.author = $scope.blog_postAuthor;
    blog_post.image = $scope.blog_postImage;
    blog_post.$save(function (result) {
      $scope.blog_posts.push(result);
      $scope.blog_postTitle = '';
      $scope.blog_postDescription = '';
      $scope.blog_postAuthor = '';
      $scope.blog_postTags = '';
      $scope.blog_postImage = '';
    });
  }

  $scope.deleteBlogPost = function (blog_post) {
    var i = $scope.blog_posts.indexOf(blog_post);
    $scope.blog_posts.splice(i, 1);

  }


}]);