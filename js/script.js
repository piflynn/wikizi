$(document).ready(function() {
  

  function wikiSearch() {
    search = $("#search").val();
    results = '';

    
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+search+"&format=json&callback=?",
        origin: "https://piflynn.github.io/wikizi",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function(json) {
      if(json.query !== undefined) {
        for(var i = 0; i < json.query.search.length; i++) {
          results += '<a href="https://en.wikipedia.org/wiki/'+ json.query.search[i].title +'" class="list-group-item list-group-item-info"><h4><b>'+ json.query.search[i].title+'</b></h4><p>'+json.query.search[i].snippet+'</p></a>';
        }
      }
      else {
        results = '';
      }
      $("#results").html(results);
    });
    


  }

  $("#search").keyup(wikiSearch);
  $("#go").click(wikiSearch);
 
  
});

