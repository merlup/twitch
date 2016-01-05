var app = angular.module('webApp', ['ngResource', 'ui.router']);

app.run(['$rootScope', '$state', function($rootScope, $state){
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    var redirect = toState.redirectTo;
    if (redirect) {
      event.preventDefault();
      if(angular.isFunction(redirect))
          redirect.call($state);
      else
          $state.go(redirect);
    }
  });
}]);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
   
  $stateProvider
  .state('/', {
    url: '',
    templateUrl: '/index',
    controller: 'indexCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: '/main',
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
  .state('userchannel.cart', {
    url: '.cart',
    templateUrl: "cart",
    controller: 'storescontroller'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: '/profile',
    controller:   'profileCtrl'
  });

  $urlRouterProvider.otherwise( function($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("main"); //redirect to a 404 page
});

  // $urlRouterProvider.otherwise("main");
  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});