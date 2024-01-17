// defined colors
var buttonColors=["red","blue","green","yellow"]

// Empty Array for Game Patterns
var gamePattern=[]

var userClickedPattern=[]

// Initializing it as a false so no key will detect while one is already press
var started= false;

var level = 0

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level:"+level)
        nextSequence()
        started=true
    } 
    
});


// Getting which button is pressed
$(".btn").click(function(){
    
    // this will give which color is clicked by providing its id
    var userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor)
    // console.log(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
    
});


//  Check Answer
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        // console.log("success");
        // Checking if user has finished pattern or not
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    }
    else{
        // console.log("Wrong");
        playSound("wrong")

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over,Press Any Key To Restart")
        startOver()
    }
}


// generating Next Sequence
function nextSequence() {

    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level:"+level)

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColor)

}

// Making Sound Function
function playSound(name){
    var audio= new Audio("sounds/" + name + ".mp3")
    audio.play()
}


// Animation To Buttons

function animatePress(currentColor) { 
    $("."+currentColor).addClass("pressed");
    setTimeout(() => {
        $("."+currentColor).removeClass("pressed");
    }, 100);
 }


function startOver() {
    level = 0
    gamePattern=[]
    started=false
  }