$(document).ready(function() {
  $("#board").on('click', function(event) {
    var $target = $(event.target);
    var id = $target.data("id");
    if (id !== undefined){
     console.log("clicked " + id);
     if($target.text() === ""){
      $target.text(id);
     }
   }
  });
});

var player = function(event) {
  if ( ){
    $target === id;
    return x
  };
}
