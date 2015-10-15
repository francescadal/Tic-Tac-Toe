
//created symbol to represent the first mark the player makes
var symbol = "X";

var board = ["","","","","","","","",""];
//using jquery made a click function that initially returned the boards entry_slot id.
$(document).ready(function() {
  $("#board").on('click', function(event) {
    var $target = $(event.target);
    var id = $target.data("id");
//using the click function to toggle between X and O.
    if (id !== undefined) {
      console.log("clicked " + id)};
      if($target.text() === "") {
        $target.text(symbol);
        //the click if first an x after the first click it change to "0"
        board[id] = symbol;
        var winner = checkForWin();
        if(winner){
          alert("Winner is " + winner);
        }
          if (symbol === "X"){
          symbol = "O";
          } else {
            symbol = "X";
            }
      }
  })
});
  //this is where i added it
  //created an array of the possible win combinations
      var win = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
      ];


      var checkForWin = function checkForWin() {

        if(board[0] === symbol && board[1] === symbol && board[2] === symbol ||
          board[3] === symbol && board[4] === symbol && board[5] === symbol ||
          board[6] === symbol && board[7] === symbol && board[8] === symbol ||
          board[0] === symbol && board[3] === symbol && board[6] === symbol ||
          board[1] === symbol && board[4] === symbol && board[7] === symbol ||
          board[2] === symbol && board[5] === symbol && board[8] === symbol ||
          board[0] === symbol && board[4] === symbol && board[8] === symbol ||
          board[2] === symbol && board[4] === symbol && board[6] === symbol
          ){ alert("Winner is " + symbol)}


      };




