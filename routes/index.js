var express = require('express');
var router = express.Router();
var someCountries = require('../models/countries.json');

var Countries = require('../models/mongoStuff.js')
var mongoStuff = require('../models/mongoStuff.js');
// var searchFilter = require('../models/searchFunction.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'All the Countries'});
});

router.get('/countries', function(req, res){
  
  Countries.find({},function(err, CountriesFromDB){
  
   res.send(CountriesFromDB);

  });
});

router.post('/search', function(req,res,data){
  var searchedFor = req.body.theSearch;

  console.log('THIS IS theSearch::::', searchedFor);
  
  Countries.find({}, function(err, CountriesFromDB){

    var searchResult = CountriesFromDB.filter(function(element){
          if(element.name.toLowerCase()===searchedFor){
            return element;
          }
        });
    console.log('THIS IS THE SEARCH RESULT::::', searchResult);
    res.send({result: searchResult});
  });
  
});

router.post('/modifyCountry', function(){
  // var traveledTo = 
});

module.exports = router;
