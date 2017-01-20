  ////////////////////
 // Back End Section
////////////////////
var pingPongSequence = function(positiveInteger, exceptions) {
  var results, item;

  for (var i = 1; i <= positiveInteger; i++) {
    if (!results) {
      results = [];
    }
    item = i;

    exceptions.forEach(function(exceptionElements) {
      if (i % exceptionElements[0] === 0) {
        item = exceptionElements[1];
      }
    });

    results.push(item);
  } // End for

  return results;
}


  /////////////////////
 // Front End Section
/////////////////////
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var positiveInteger = parseInt( $("#inputPositiveInteger").val() );

    var results = pingPongSequence(positiveInteger, [[3,"ping"], [5, "pong"], [15, "ping-pong"]]);

    var outputResult;

    if (!Array.isArray(results)) {
      outputResult = "Result is not an array";
    } else {
      // Use map to surround string items with double quotes
      // Note: We do this to make the string values appear exactly as they do in the example output
      // Also enable hovering over string items to reveal what the number would be without replacement
      results = results.map(function(item, index) {
        if ((typeof item) === "string") {
          item = '<span title="' + (index + 1).toString() + '">"' + item + '"</span>';
        }
        return item;
      });

      // Note: We join with a comma and a space to make the sequence appear exactly as it does in the example output
      outputResult = "[" + results.join(", ") + "]";
    } // End if !Array

    $("#pingPongSequence").html(outputResult);

    $("#outputSection").fadeOut(100).fadeIn(100);
  });
});
