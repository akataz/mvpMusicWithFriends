angular.module('mwFriends', [
  'shortly.services',
  'shortly.links',
  'shortly.shorten',
  'shortly.auth',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/signup.html',
      controller: 'AuthController'
    })
    .when('/videos', {
      templateUrl: 'app/links/videos.html',
      controller: 'VideosController',
    })
    .when('/signout', {
      redirectTo: '/signin'
    })
    .otherwise({
      redirectTo: '/videos'
    });
   
})

.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
