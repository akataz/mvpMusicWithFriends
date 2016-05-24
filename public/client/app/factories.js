angular.module('mwFriends.factories', [])

.factory('Videos', function ($http) {  
    var data = {};

    var getAll = function(){
      
      return $http({
        method:'GET',
        url: "/api/videos"
      })
      .then(function(res){  
        return res.data;
      })
      .catch(function(err){
        console.log(err);
        return err;
      })
    };

    var addOne = function(req){
      return $http({
        method: 'POST',
        url: "/api/videos",
        data: req
      })
      .then(function(res){
        return res;
      })
      .catch(function(err){
        console.log(err);
        return err;
      }
      )
    };
    return {
      getAll: getAll,
      addOne: addOne,
      data: data
    };
})