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

app.controller('postsController', ['$scope', '$resource', function ($scope, $resource) {
  
  var BlogPost = $resource('/blog_posts');

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
  
  // if none of the above states are matched, use this as the fallback

  });
