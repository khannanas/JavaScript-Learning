// For 1st Image

var randomNum=Math.floor(Math.random()*6)+1; //range 1-6

var imageBaseonRandomNum="dice"+randomNum+".png" //this will give dice1,2,3,etc

var imageScource="images/"+imageBaseonRandomNum;

// selects 1st image
var diceImage=document.querySelectorAll("img")[0]

diceImage.setAttribute("src",imageScource)


// For 2nd Image

var randomNum2=Math.floor(Math.random()*6)+1; //range 1-6

var imageScource2="images/dice"+randomNum2+".png"

document.querySelectorAll("img")[1].setAttribute("src",imageScource2);

// Comparing both Dices

if (randomNum > randomNum2) {
    document.querySelector("h1").innerHTML="Player 1 Wins"
}
else if(randomNum2 > randomNum){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML="It's A Draw"
}

