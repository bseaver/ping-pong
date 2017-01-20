  ////////////////////
 // Back End Section
////////////////////
var pingPongSequence = function(positiveInteger) {
  var results;

  for (var i = 1; i <= positiveInteger; i++) {
    if (!results) {
      results = [];
    }
    results.push(i);
  }

  return results;
}


  /////////////////////
 // Front End Section
/////////////////////
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var positiveInteger = parseInt( $("#inputPositiveInteger").val() );

    var results = pingPongSequence(positiveInteger);

    if (!Array.isArray(results)) {
      outputResult = "Result is not an array";
    } else {
      var outputResult = "[" + results.join(", ") + "]";
    }

    $("#pingPongSequence").text(outputResult);

    $("#outputSection").fadeOut(100).fadeIn(100);
  });
});
