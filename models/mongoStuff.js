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


// Uncomment below only the first time this page is run to populate the db.......
// someCountries.map(function(item){
//   var aCountry = new Countries({
//     name: item.name,
//     frenchName: item.frenchName,
//     localName: item.localName,
//     region: item.region,
//     hasTraveled: false
//   });
//   aCountry.save();
// });

// console.log('MONGO STUF RAN::::::::::::::::::')