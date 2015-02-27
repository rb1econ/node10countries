var express = require('express');
var router = express.Router();
var someCountries = require('../models/countries.json');
var mongoStuff = require('../models/mongoStuff.js');
// var searchFilter = require('../models/searchFunction.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'All the Countries'});
});

router.get('/countries', function(req, res){
  // console.log(models);
  res.send(someCountries);
});

router.post('/search', function(req,res,data){
  
  var searchedFor = req.body.theSearch;
  console.log('THIS IS theSearch::::', searchedFor);
  var searchResult = someCountries.filter(function(element){
        if(element.name.toLowerCase()===searchedFor){
          return element;
        }
      });
  console.log('THIS IS THE SEARCH RESULT::::', searchResult);
  res.send({result: searchResult});
});

router.post('/modifyCountry', function(){

});

module.exports = router;
