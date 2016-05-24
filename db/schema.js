// /* You'll need to
//  * npm install sequelize
//  * before running this example. Documentation is at http://sequelizejs.com/
//  */

// var Sequelize = require("sequelize");
// var sequelize = new Sequelize("mwFriends", "root", "", {

//   storage: '../mwFriends.sqlite'
// });

// var Video = sequelize.define('Video', {
//   url: Sequelize.STRING,
//   title: Sequelize.STRING,
//   views: Sequelize.INTEGER
// });



//   // user_id: Sequelize.INTEGER,
// /* first define the data structure by giving property names and datatypes
//  * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// // var Group = sequelize.define('Group', {
// //   group_id: {
// //     type: Sequelize.INTEGER,
// //     autoincrement: true;
// //   },
// //   groupname: Sequelize.STRING,
// //   password: Sequelize.STRING

// // });


// /* .sync() makes Sequelize create the database table for us if it doesn't
//  *  exist already: */
// // Group.sync().success(function() {
// //   /* This callback function is called once sync succeeds. */

// //   // now instantiate an object and save it:
// //   var newGroup = Group.build({username: "doghouse"});
// //   newGroup.save().success(function() {

// //      This callback function is called once saving succeeds. 

// //     // Retrieve objects from the database:
// //     Group.findAll({ where: {username: "Tyrus"} }).success(function(usrs) {
// //       // This function is called back with an array of matches.
// //       for (var i = 0; i < usrs.length; i++) {
// //         console.log(usrs[i].username + " exists");
// //       }
// //     });
// //   });
// // });