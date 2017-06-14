//Business Logic

//User Interface Logic
$(document).ready(funtion() {
  $("form#pingpong-form").submit(function(event) {
    event.preventDefault();
    var getNumber=parseInt($("#new-number").val());
    var numbers=[];

    // numbers.forEach(function(number) {
    // var userInput = $("input#" + number).val();
    // $("." + number).text(userInput);
    // });
    for(var index=0; index<=getNumber; index++) {
      if(getnumber % 3 === 0) {
          return "ping";
      }
      else if(getnumber % 5 === 0) {
          return "pong";
      }
      else if(getnumber % 15 === 0) {
          return "pingpong";
      }
    $("#new-number").text("numbers[index]");
    }

  });

});
