var app = angular.module('webApp');

app.controller('indexCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'crazy'
	];
}]);
app.controller('channelsCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'channels'
	];
}]);
app.controller('livenowCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'livenow'
	];
}]);
app.controller('loginCtrl', ['$scope', function($scope) {
	

	$scope.messages = [
	'login'
	];
}]);
app.controller('signupCtrl', ['$scope', '$resource', function($scope, $resource) {
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
app.controller('userchannelCtrl', function($scope) {
	$scope.messages = [
	'userchannel'
	];
});
app.controller('mainCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'main'
	];

	$scope.topchannels = [
	'topchan1',
	'topchan2',
	'topchan3',
	'topchan4',
	];

}]);

app.controller('menu1Ctrl', ['$scope', function($scope) {
	$scope.livenow = [
	{ name: 'user1',
	status: 'online'
	},
	{ name: 'user2',
	status: 'online'
	},
	{ name: 'user3',
	status: 'online'
	},
	{ name: 'user4',
	status: 'online'
	},
	{ name: 'user5',
	status: 'online'
	}
	];
}]);
app.controller('menu2Ctrl', ['$scope', function($scope) {
$scope.livenow = [
{ name: 'user6',
	status: 'offline'
	},
	{ name: 'user7',
	status: 'online'
	},
	{ name: 'user8',
	status: 'offline'
	},
	{ name: 'user9',
	status: 'online'
	},
	{ name: 'user10',
	status: 'offline'
	}
	];
}]);
app.controller('profileCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'profile'
	];
}]);
app.controller('postsController', ['$scope', '$resource', function ($scope, $resource) {
  
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