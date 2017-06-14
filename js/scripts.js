//Business Logic

//User Interface Logic
$(document).ready(function() {
  $("form#pingpong-form").submit(function(event) {
    event.preventDefault();
    var getNumber=parseInt($("#new-number").val());
    // result = Play(getNumber);
      $("#new-number").text("");
    for(var index=1; index<=getNumber; index++) {
       if(index % 15 === 0) {
          $("p#result").append("pingpong");
      }
      else if(index % 3 === 0) {
        $("p#result").append("ping");
      }
      else if(index % 5 === 0) {
          $("p#result").append("pong");
      }

      else{
        $("p#result").append(index);
      }
      $("p#result").append("<br>");

    }

  });

});
