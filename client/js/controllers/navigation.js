angular.module('webApp').controller('NavCtrl', ['$scope', function($scope) {
	$scope.navigation = [		
	{ name: 'Profile', link: 'profile'},
	{ name: 'Userchannel', link: 'userchannel'},
	{ name: 'Signup', link: 'signup'},
	{ name: 'Login', link: 'login'},
	{ name: 'Live Now', link: 'livenow'},
	{ name: 'Channels', link: 'channels'},
	{ name: 'Home', link: 'main'}
	];
}]);