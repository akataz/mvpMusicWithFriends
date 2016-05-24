var videosController = require('../videos/videoController.js');
var helpers = require('./helpers.js');
module.exports = function (app, express) {

  // authentication middleware used to decode token and made available on the request
  // app.get('/api/videos/', videosController.allLinks);
  // app.post('/api/videos/', videosController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};



// var groupController = require('../groups/groupController.js');
  // app.post('/api/groups/signin', groupController.signin);
  // app.post('/api/groups/signup', groupController.signup);
  // app.get('/api/users/signedin', groupController.checkAuth);