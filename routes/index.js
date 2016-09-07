var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  var myArtwork = [];
  var myArtists = appdata.speakers;

  appdata.speakers.forEach(function (item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists
  });
});

/* GET speakers page. */
router.get('/speakers', function(req, res) {
  var myArtwork = [];
  var myArtists = appdata.speakers;

  appdata.speakers.forEach(function (item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists
  });
});

/* GET speakers page. */
router.get('/speakers/:speakerid', function(req, res) {
  var myArtwork = [];
  var myArtists = [];
  appdata.speakers.forEach(function (item) {
    if (req.params.speakerid === item.shortname) {
      myArtists.push(item);
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists
  });
});

module.exports = router;
