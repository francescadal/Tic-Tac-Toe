
var symbol = "X";

$(document).ready(function() {
  $("#board").on('click', function(event) {
    var $target = $(event.target);
    var id = $target.data("id");

    if (id !== undefined) {
      console.log("clicked " + id);
      if($target.text() === "") {
        $target.text(symbol);
         if (symbol === "X"){
          symbol = "O";
        } else{
          symbol = "X";
        }



        // if (isOdd === true){
        //   $target.text('x');
        //   isOdd = false;
        //   board[$target.index()] = 'x';
        //   checkForWin('x')
        // } else {
        //   $target.html('o');
        //   isOdd = true;
        //   board[$target.index()] = 'o';
        //   checkForWin('o')
        // }
      }
    }
  });
});


