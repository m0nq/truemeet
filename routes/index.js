var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */

router.get('/', function(req, res) {
  console.log(appdata);
  var myArtwork = [];
  appdata.speakers.forEach(function (item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  console.log(myArtwork);
  res.render('index', {
    title: 'Home',
    artwork: myArtwork
  });
});

module.exports = router;
