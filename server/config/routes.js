var VideosController = require('../videos/videoController.js');
var groupController = require('../groups/groupController.js');
var helpers = require('./helpers.js');
module.exports = function (app, express) {=

  app.post('/api/groups/signin', groupController.signin);
  app.post('/api/groups/signup', groupController.signup);
  // app.get('/api/users/signedin', groupController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  app.get('/api/videos/', videosController.allLinks);
  app.post('/api/videos/', videosController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};