//Business Logic
var getNumToBeDisplayed = function(index)
{
  if(index % 15 === 0) {
     return "pingpong";
 }
 else if(index % 3 === 0) {
   return "ping";
 }
 else if(index % 5 === 0) {
     return "pong";
 }
 else{
   return index;
 }
}

//User Interface Logic
$(document).ready(function() {
  $("form#pingpong-form").submit(function(event) {
    event.preventDefault();
    var getNumber=parseInt($("#new-number").val());
      $("#new-number").text("");
    for(var index=1; index<=getNumber; index++) {
      $("p#result").append(getNumToBeDisplayed(index));
      $("p#result").append("<br>");
  }
  });

});
