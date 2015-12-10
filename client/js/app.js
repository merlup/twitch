var app = angular.module('webApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/index', {
    template: 'index',
    controller: 'indexCtrl'
  })
  .when('/main', {
    templateUrl: 'main',
    controller:   'mainCtrl'
  })
  .when('/login', {
    templateUrl: 'login',
    controller:   'loginCtrl'
  })
  .when('/channels', {
    templateUrl: 'channels',
    controller:   'channelsCtrl'
  })
  .when('/livenow', {
    templateUrl: 'livenow',
    controller:   'livenowCtrl'
  })
  .when('/signup', {
    templateUrl: 'signup',
    controller:   'signupCtrl'
  })
  .when('/userchannel', {
    templateUrl: 'userchannel',
    controller:   'userchannelCtrl'
  })
  .when('/profile', {
    templateUrl: 'profile',
    controller:   'profileCtrl'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });


  $routeProvider.otherwise({redirectTo: 'index'});
  // if none of the above states are matched, use this as the fallback

  });
