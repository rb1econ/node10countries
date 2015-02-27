var mongoose = require('mongoose');
var someCountries = require('./countries.json');

var countrySchema = mongoose.Schema({
  name: String,
  frenchName: String,
  localName: String,
  region: String,
  hasTraveled: Boolean
});

var Countries = mongoose.model('Countries', countrySchema);

module.exports = Countries;

Countries.find({}, function(err, documents){
  var theMasterArray = someCountries.map(function(item){
    var aCountry = new Countries({
      name: item.name,
      frenchName: item.frenchName,
      localName: item.localName,
      region: item.region,
      hasTraveled: false
    });
  });
  console.log('THIS IS A CONSOLE DOT LOG:::::::', theMasterArray);
});


// Countries.find({}, function(err, documents){

// });