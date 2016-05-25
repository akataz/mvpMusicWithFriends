var Video = require('app');
// var  Q = require('q');
var util = require('../config/utils.js');


module.exports = {

  allLinks: function (req, res, next) {
  findAllLinks({})
    .then(function (links) {
      res.json(links);
    })
    .fail(function (error) {
      next(error);
    });
  },

  newLink: function (req, res, next) {
    var url = req.body.url;
    var title = req.body.title;

    Video.addVid(newLink);


      .then(function (title) {
        if (title) {
          var newLink = {
            url: url,
            base_url: req.headers.origin,
            title: title
          };
          return Video.create(newLink);
        }
      })
      .then(function (createdLink) {
        if (createdLink) {
          res.json(createdLink);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }

  

};
    // if (!util.isValidUrl(url)) {
    //   return next(new Error('Not a valid url'));
    // }

    // findLink({url: url})
    //   .then(function (match) {
    //     if (match) {
    //       res.send(match);
    //     } else {
    //       return util.getUrlTitle(url);
    //     }
    //   })