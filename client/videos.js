angular.module('mwFriends.videos', ['ngYoutubeEmbed'])

.controller('VideosController', function ($scope, Videos) {
  $scope.data = {};

  angular.extend($scope, Videos);


  var gAll = function(){
    Links.getAll()
    .then(function(data) {
      $scope.data.links = data;
    })
    .catch(function(err){
      console.error(err);
    });
  }
  gAll();
});


.controller('videoController', ['$scope', function($scope) {
    $scope.link = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
}]);




// var myApp = angular.module('myApp', ['ngYoutubeEmbed']);