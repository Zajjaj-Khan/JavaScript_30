// alert("Hello");
// console.log($('h1'));
let userClickedPattern = []
let gamePattern = [];
let buttonColours=["red","blue","green","yellow"]
let level = 0;
let started = false;
$(document).keypress(function(){
   if(!started){
    nextSequence();
    started=true;}
});
$('.btn').on("click",function(){
     userChosenClour= $(this).attr('id');
    userClickedPattern.push(userChosenClour);
    playSound(userChosenClour);
    animatePress(userChosenClour);
    checkAnswer(userClickedPattern.length-1);
    
});
//All Functions
function nextSequence() {
     userClickedPattern = []
    level++;
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("#level-title").html(`<h1>Level ${level}</h1>`);
  
   
};

function playSound(name){
    const audio = new Audio (`sounds/${name}.mp3`);
    audio.play();
};
function animatePress(currentColour){
   $(`#${currentColour}`).addClass("pressed");
   setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");  
   }, 50);
};
function checkAnswer (currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        console.log(userClickedPattern.length );
          console.log(gamePattern.length );
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
          
          
  
        }
      } else {
        playSound("wrong");
        $('body').addClass("game-over");
  
        setTimeout(() => {
            $('body').removeClass("game-over");
        }, 200);
        startOver();
        $("#level-title").html(`<h1>Game Over, Press any key to start again!</h1>`);
      }
  
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}