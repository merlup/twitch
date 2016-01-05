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
app.controller('profileCtrl', ['$scope', function($scope) {
	$scope.messages = [
	'profile'
	];
}]);