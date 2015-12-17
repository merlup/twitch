var app = angular.module('webApp', ['ui.router', 'ngResource']);

app.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params)
      }
    });
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
   
  $stateProvider
  .state('/', {
    url: '/index',
    templateUrl: '/index',
    controller: 'indexCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'main',
    controller:   'mainCtrl',
    redirectTo: 'main.menu1'
  })
  .state('main.menu1', {
    url: '',
    templateUrl: "menu1",
    controller: 'menu1Ctrl'
  })
  .state('main.menu2', {
    url: '',
    templateUrl: "menu2",
    controller: 'menu2Ctrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'login',
    controller:   'loginCtrl'
  })
  .state('channels', {
    url: '/channels',
    templateUrl: '/channels',
    controller:   'channelsCtrl'
  })
  .state('livenow', {
    url: '/livenow',
    templateUrl: '/livenow',
    controller:   'livenowCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '/signup',
    controller:   'signupCtrl'
  })
  .state('userchannel', {
    url: '/userchannel',
    templateUrl: '/userchannel',
    controller:   'userchannelCtrl'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: '/profile',
    controller:   'profileCtrl'
  });

  $urlRouterProvider.otherwise("main");
  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });


  
  // if none of the above states are matched, use this as the fallback

  });
