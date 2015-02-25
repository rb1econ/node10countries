var express = require('express');
var router = express.Router();
var models = require('../models/countries.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'All the Countries'});
});

router.get('/countries', function(req, res){
  // console.log(models);
  res.send(models);
});

module.exports = router;
