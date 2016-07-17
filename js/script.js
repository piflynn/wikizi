$(document).ready(function() {
  var search = '';
  var results = '';

  function wikiSearch() {
    search = $("#search").val();
    results = '';

    $.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&limit=10&namespace=0&format=json&callback=?",  function(json) {

    for(var i = 0; i < json[1].length; i++) {
      results += '<a href="'+json[3][i]+'" class="list-group-item list-group-item-info"><h4><b>'+json[1][i]+'</b></h4><p>'+json[2][i]+'</p></a>'
    }

    $("#results").html(results);

    });
  }

  $("#search").keyup(wikiSearch);
  $("#go").click(wikiSearch);

 
  
});
      