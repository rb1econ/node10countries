$(document).on('ready', function(){
  
  $('#loadCountries').on('click', function(){
    $.get('/countries', function(dataFromServer){
      $('.theCountries').empty();
      dataFromServer.map(function(element){
        $('.theCountries').append('<ul class="col-sm-6"><li>'+element.name+'</li><li><em>French Name:</em> '+element.frenchName+'</li><li><em>Local Name:</em> '+element.localName+'</li><li><em>Region:</em> '+element.region+'</li></ul>');
      });
    });
  });

  $('#searchBtn').on('click', function(){

    $.get('/countries', function(req, res){
      // $('.theCountries').empty();
      var theSearch = $('#searchBox').val().toLowerCase();
      var searchResult = req.filter(function(element){
        if(element.name.toLowerCase()===theSearch){
          return element;
        }
      });
    });
    
    var theSearch = $('#searchBox').val().toLowerCase();
    $.post('/search', {theSearch:theSearch},function(data){
      $('.theCountries').empty();
      console.log('this is data:::::',data.result[0]);
      var actualResult = data.result[0];
      $('.theCountries').append('<ul><li>'+actualResult.name+'</li><li><em>French Name:</em> '+actualResult.frenchName+'</li><li><em>Local Name:</em> '+actualResult.localName+'</li><li><em>Region:</em> '+actualResult.region+'</li></ul>');
    });

    
    
  });

});