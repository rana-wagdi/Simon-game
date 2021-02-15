var buttonColours =["red","blue","green","yellow"];
var gamePattern = [];

var userClickedPattern= [];

var start = false;
var level = 0;
$(document).keypress(function(){
    if(!start){

$("h1").text("level " + level);
        nextSequence();
        start=true;
    }
})

 $(".btn").click(function(){
     var userChosenColour = $(this).attr("id");

     userClickedPattern.push(userChosenColour);
     playSound(userChosenColour)
     animatePress(userChosenColour)
     console.log(userClickedPattern)
 })



function nextSequence(){
    level++;
    $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour)

    console.log(gamePattern);
}


 function playSound(name) {
     var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
 }

 function animatePress(currentColour){
    $('#'+currentColour).addClass('pressed')
    setTimeout(function(){
         $("#" + currentColour).removeClass("pressed");
    },100)
 }