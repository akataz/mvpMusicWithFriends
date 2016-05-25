var model = require('../models.js');
var helpers = require('./helpers.js');
module.exports = function (app, express) {

  // authentication middleware used to decode token and made available on the request
  // app.get('/', function(){

  // })
  console.log("HEYYYYYY")
  console.log(model.videos)
  // app.get('/api/videos/', model.videos.add(function(err, result){
  //   if(err) console.log(err);
  //   else {
  //     res.send(result);
  //   }

  // }));
  // app.post('/api/videos/', model.videos.pull(function(err, result){
  //   if(err) console.log(err);
  //   else {
  //     res.send(result);
  //   }

  // }));

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

