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
	var User = $resource('/users');

	User.query(function (results) {
		$scope.users = results;
	});

	 $scope.users = []

	$scope.createUser = function () {
		var user = new User({
		email: this.email,
		username: this.username,
		name: this.name,
		password: this.password
	});

		user.$save(function (result) {
			$scope.users.push(result);
			$scope.username ='',
			$scope.email ='',
			$scope.name ='',
			$scope.password =''
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
	},
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
app.controller('menu2Ctrl', ['$scope', function($scope) {
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
	},
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
app.factory('BlogPost', ['$resource',
  function ($resource) {
    return $resource('/blog_post/:blog_postId', {
      blog_postId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      create: {
      	method: 'POST'
      },
      delete: {
      	method: 'DELETE'
      }
    });
  }
]);
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

app.controller('storesController', ['$scope', '$resource', function ($scope, $resource) {

	var StoreItem = $resource('/store_items');

	StoreItem.query(function (results) {
	  $scope.store_items = results;
	});
 
 	$scope.store_items = []


	$scope.createStoreItem = function () {

	    var store_item = new StoreItem();

	    store_item.title = $scope.store_itemTitle;
	    store_item.description = $scope.store_itemDescription;
	    store_item.image = $scope.store_itemImage;
	    store_item.price = $scope.store_itemPrice;
	    store_item.quantity = $scope.store_itemQuantity;
	    store_item.$save(function (result) {
	      $scope.store_items.push(result);
	      $scope.store_itemTitle = '';
	      $scope.store_itemDescription = '';
	      $scope.store_itemPrice = '';
	      $scope.store_itemImage = '';
	      $scope.store_itemQuantity = '';
	      console.log(result);
	    });
	}

	$scope.deleteStoreItem = function (store_item) {
	    var i = $scope.store_items.indexOf(store_item);
	    $scope.store_item.splice(i, 1);
	}

}])
app.controller('submerchantCtrl', ['$scope', '$resource', function ($scope, $resource) {

	var SubMerchant = $resource('/submerchants');

	SubMerchant.query(function (results) {
	  $scope.submerchants = results;
	});
 
 	$scope.submerchants = []


	$scope.createSubMerchant = function () {

	    var submerchant = new SubMerchant();

	    submerchant.firstName = $scope.submerchantfirstName;
	    submerchant.lastName = $scope.submerchantlastName;
	    submerchant.email = $scope.submerchantEmail;
	    submerchant.phone = $scope.submerchantPhone;
	    submerchant.dateOfBirth = $scope.submerchantDateOfBirth;
	    submerchant.ssn = $scope.submerchantSsn;
	    submerchant.streetAddress = $scope.submerchantStreetAddress;
	    submerchant.locality = $scope.submerchantLocality;
	    submerchant.region = $scope.submerchantRegion;
	    submerchant.postalCode = $scope.submerchantPostalCode;
	    submerchant.$save(function (result) {
	     	$scope.submerchants.push(result);
	     	$scope.submerchantfirstName = '';
			$scope.submerchantlastName = '';
			$scope.submerchantEmail = '';
			$scope.submerchantPhone = '';
			$scope.submerchantDateOfBirth = '';
			$scope.submerchantSsn = '';
			$scope.submerchantStreetAddress = '';
			$scope.submerchantLocality = '';
			$scope.submerchantRegion = '';
			$scope.submerchantPostalCode = '';
			console.log(result);
	    });

	}

	$scope.deleteStoreItem = function (store_item) {
	    var i = $scope.store_items.indexOf(store_item);
	    $scope.store_item.splice(i, 1);
	}
	
	
}]);
	

	



