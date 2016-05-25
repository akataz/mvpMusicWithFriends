var app = require('./server.js');

module.exports = {
  videos: {
    add: function (callback) {
      app.Video.findAll()
        .then(function(result) {
          callback(null, result);
        })
        .catch(callback);
    },
    pull: function (data, callback) {
      app.Video.create({
        where: {
          url : data.url,
          title : data.title
        }        
      }).then(function(result){
          console.log('Added video');
          callback();
      });      
    } // a function which can be used to insert a message into the database
  }

}