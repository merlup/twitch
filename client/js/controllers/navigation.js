angular.module('webApp').controller('NavCtrl', ['$scope', function($scope) {
	$scope.navigation = [
		{name: 'main', link: '/main'},
		{name: 'channels', link: '/channels'},
		{name: 'livenow', link: '/livenow'},
		{name: 'login', link: '/login'},
		{name: 'signup', link: '/signup'},
		{name: 'userchannel', link: '/userchannel'},
		{name: 'profile', link: '/profile'}
	];
}]);