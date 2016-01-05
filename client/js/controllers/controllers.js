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