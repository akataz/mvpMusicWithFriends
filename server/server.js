var express = require('express');
var Sequelize = require("sequelize");
var path = require('path');

var app = express();

var handler = require('./config/routes');

app.set('port', process.env.PORT || 3000);

var sequelize = new Sequelize("mwFriends", "root", null, {
  dialect: 'sqlite',
  storage: '../../mwFriends.sqlite'
});

Video = sequelize.define('Video', {
  url: Sequelize.STRING,
  title: Sequelize.STRING
  // views: Sequelize.INTEGER
});

Video.sync();
Video.create({url: 'https://www.youtube.com/watch?v=V6cMkhhqn6k', title: 'feelin alright'});



app.use(express.static("../public/client/"));

// app.get('/', function(req, res){
//   res.sendfile(path.resolve('../public/client/index.html'));
// });
// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(app.get('port'), function(){
   console.log('express server listening on port ' + app.get('port'));
    });

// export our app for testing and flexibility, required by app.js
module.exports = app;

//The line below specifies your views folder
// app.set('', path.join(__dirname, './public/client'));

// sequelize.authenticate().complete(function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });