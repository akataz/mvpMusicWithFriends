var app = angular.module('mwFriends', ['mwFriends.factories', 'ngYoutubeEmbed']);

app.controller('VideosController', function($scope, Videos) {
    $scope.data = {videos: {}};
    $scope.hello = "hello world";
    angular.extend($scope, Videos);


    var gAll = function() {
        Videos.getAll()
            .then(function(data) {
                $scope.data.videos = data;
            })
            .catch(function(err) {
                console.error(err);
            });
    }
    gAll();

    $scope.video = {};
    console.log($scope.video);
    $scope.addLink = function() {
        $scope.loading = true;
        Videos.addOne($scope.video)
            .then(function() {
                $scope.loading = false;
                // $location.path('/')
            })
            .catch(function(err) {
                console.log(err);
            })
    };
});

app.controller('utubeController', ['$scope', function($scope) {
    $scope.videoList = $scope.data;
    $scope.playVideo = function($scope.video.url) {
        $scope.link = $scope.video.url;
    }
        // $scope.link = video.url;
    // }

}]);




// var myApp = angular.module('myApp', ['ngYoutubeEmbed']);
