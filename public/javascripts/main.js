$(document).on('ready', function(){

  var countriesArray = [];
  
  $('#loadCountries').on('click', function(){
    $.get('/countries', function(req, res){
      // console.log('THE REQ', req);
      // console.log('THE RES', res);
      console.log(req);
    });

    // $.get('/countries.json', function(json){
    //   $('.theCountries').empty();
    //  json.map(function(element){
    //   $('.theCountries').append('<ul><li>'+element.name+'</li><li>'+element.frenchName+'</li><li>'+element.localName+'</li><li>'+element.region+'</li></ul>')
    //  });
    // });
  });

});