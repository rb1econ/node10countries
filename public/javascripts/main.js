$(document).on('ready', function(){
  
  $('#loadCountries').on('click', function(){
    $.get('/countries', function(req, res){
      $('.theCountries').empty();
      req.map(function(element){
      $('.theCountries').append('<ul><li>'+element.name+'</li><li><em>French Name:</em> '+element.frenchName+'</li><li><em>Local Name:</em> '+element.localName+'</li><li><em>Region:</em> '+element.region+'</li></ul>');
      });
    });
  });

  $('#searchBtn').on('click', function(){
    $.get('/countries', function(req, res){
      var theSearch = $('#searchBox').val().toLowerCase();
      var searchResult = req.filter(function(element){
        if(element.name.toLowerCase()===theSearch){
          return element;
        }
      });
    var actualResult = searchResult[0];
    $('.theCountries').append('<ul><li>'+actualResult.name+'</li><li><em>French Name:</em> '+actualResult.frenchName+'</li><li><em>Local Name:</em> '+actualResult.localName+'</li><li><em>Region:</em> '+actualResult.region+'</li></ul>')
    // console.log('SEARCH RESULT: ', searchResult[0]);
    // console.log('SEARCH Queery', theSearch);
    });
  });


});