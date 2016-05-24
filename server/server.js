var express = require('express');
var Sequelize = require("sequelize");

var app = express();

var handler = require('./config/routes');
app.set('port', process.env.PORT || 3000);

var sequelize = new Sequelize("mwFriends", "root", null, {
  dialect: 'sqlite',
  storage: '/../mwFriends.sqlite'

});

var Video = sequelize.define('Video', {
  url: Sequelize.STRING,
  title: Sequelize.STRING,
  views: Sequelize.INTEGER
});

// sequelize.authenticate().complete(function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(app.get('port'), function(){
   console.log('express server listening on port ' + app.get('port'));
    });

// export our app for testing and flexibility, required by index.js
module.exports = app;