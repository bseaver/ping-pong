  ////////////////////
 // Back End Section
////////////////////
var pingPongSequence = function(positiveInteger) {
}


  /////////////////////
 // Front End Section
/////////////////////
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var positiveInteger = parseInt( $("#positiveInteger").val() );

    var result = pingPongSequence(positiveInteger);

    if (!Array.isArray(result)) {
      result = "Result is not an array";
    }

    $("#pingPongSequence").text(result);

    $("#outputSection").fadeOut(100).fadeIn(100);
  });
});
