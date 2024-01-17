
//computer
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var player = [];




$(document).on('keypress', function keypressHandler() {
  
  
      nextSequence();
  $("h1").text("Level " + 1);

  
 sound(gamePattern);
  
 
  $(document).off('keypress');




  $(".restart").click(function() {
    $(".restart").addClass("pressed");
  
    setTimeout (function () {
      $(".restart").removeClass("pressed");
    }, 100);

    player = [];
    gamePattern = [];

    setTimeout(function()  {
      nextSequence();
      $("h1").text("Level " + 1);
    
      
     sound(gamePattern);
      
    }, 500);
 
   
    $(document).off('keypress');
  
  });



  $(".btn").click(function () {
    player.push(this.id);
      sound(player);
      
      for (var i = 0; i < player.length; i++) { 
       
      if (gamePattern[i] == player[i]){
       
        if ( gamePattern.length === player.length){
          correct();
          player = [];
        }
        } else {
        gameOver();
         

          //$(document).on('keypress',keypressHandler);
         
        
        }  
      }
      }
    )
    
 
 
});

//daklikva





  
  //funciebi 

  function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

}
//sounds

function sound(key){
    var last =key[key.length-2,key.length-1] ;
    var chosen = document.querySelector("#" + last );
    
 //animacia
    chosen.classList.add("pressed");
    setTimeout (function () {
    chosen.classList.remove("pressed");
    }, 100)
  //audio  
   
    var random = new Audio("sounds/" + last + ".mp3");
    random.play()
}

//game over
function gameOver () {
  $("h1").text("Game over. Press Restart  button ");
  $("body").addClass("game-over");
  
  setTimeout (function () {
    $("body").removeClass("game-over");
  }, 300);
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play()
}
//restart

 


//correct
function correct() {
   
setTimeout(function() {
  
nextSequence(); 
$("h1").text("Level " + gamePattern.length);
sound(gamePattern);
}, 1000);


}






