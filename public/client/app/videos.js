angular.module('mwFriends.videos', ['ngYoutubeEmbed'])

.controller('VideosController', function ($scope, Videos) {
  $scope.data = {};

  angular.extend($scope, Videos);


  var gAll = function(){
    Videos.getAll()
    .then(function(data) {
      $scope.data.videos = data;
    })
    .catch(function(err){
      console.error(err);
    });
  }
  gAll();
});
$scope.video = {};
  $scope.addLink = function(){
    $scope.loading = true;
    Videos.addOne($scope.video)
      .then(function(){
        $scope.loading=false;
        $location.path('/')
      })
      .catch(function(err){
        console.log(err);
      })
  };


.controller('utubeController', ['$scope', function($scope) {
    $scope.videoList = $scope.data;
    $scope.playVideo = function(){
      $scope.link = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
    }
    
}]);




// var myApp = angular.module('myApp', ['ngYoutubeEmbed']);