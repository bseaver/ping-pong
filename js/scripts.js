  ////////////////////
 // Back End Section
////////////////////
var pingPongSequence = function(positiveInteger) {
  var results, item;

  for (var i = 1; i <= positiveInteger; i++) {
    if (!results) {
      results = [];
    }
    item = i;
    if (i % 3 === 0) {
      item = "ping"
    }
    results.push(item);
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

    var outputResult;

    if (!Array.isArray(results)) {
      outputResult = "Result is not an array";
    } else {
      // Use map to surround string items with double quotes
      // Note: We do this to make the string values appear exactly as they do in the example output
      results = results.map(function(item) {
        if ((typeof item) === "string") {
          item = '"' + item + '"';
        }
        return item;
      });

      // Note: We join with a comma and a space to make the sequence appear exactly as it does in the example output
      outputResult = "[" + results.join(", ") + "]";
    } // End if !Array

    $("#pingPongSequence").text(outputResult);

    $("#outputSection").fadeOut(100).fadeIn(100);
  });
});
