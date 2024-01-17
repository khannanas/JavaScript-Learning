// Adding event listeners to buttons

// we will need loop since querySelectorAll does not works, using class name since we may use button tags in future also so it will be not efficient



for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // Selecting the button which is beign clicked on screen
        var buttonInnerHTMl = this.innerHTML
        
        makeSound(buttonInnerHTMl)
        buttonAnimation(buttonInnerHTMl)
    })
}


// Detecting which key is pressed on Keyboard
document.addEventListener("keypress",function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})


// Detecting Which is beign clicked/press
function makeSound(value){
    // Choosing what to play as what is selected
    switch (value) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3")
            // Adding Sounds
            tom1.play()
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3")
            // Adding Sounds
            tom2.play()
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3")
            // Adding Sounds
            tom3.play()
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3")
            // Adding Sounds
            tom4.play()
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3")
            // Adding Sounds
            snare.play()
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3")
            // Adding Sounds
            crash.play()
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3")
            // Adding Sounds
            kick.play()
            break;

        default:
            console.log(value);
            break;
    }
}

// Adding Animation to Website
function buttonAnimation(currentkey){
    // selecting class based on w,a,s,d
    var activebtn=document.querySelector("."+ currentkey);

    // adding predefined css class for animation
    activebtn.classList.add("pressed")
    
    setTimeout(function () {
        // removing it after 0.1s to make animation proper
        activebtn.classList.remove("pressed")
    },100)
}
