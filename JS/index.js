console.log("Welcome to drum kit");


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    // for mouse click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        // taking mouse input and passing it to playDrumBeats   
        playDrumBeats(buttonInnerHTML);

        //taking mouse input for button animation
        buttonAnimation(buttonInnerHTML);
    });
}

// for keyboard button press
document.addEventListener("keypress", function (event) {
    // taking keyboard input and passing it to playDrumBeats
    playDrumBeats(event.key);

    // taking keyboard input for animation of button pressed
    buttonAnimation(event.key);

});


// this function takes the input from keyborad or mouse and play the beats accordingly
function playDrumBeats(inputFromKeyboardOrMouse) {

    switch (inputFromKeyboardOrMouse) {
        case "w":
            var crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(innerHTML);
            break;
    }
}

// this function animates the button when key is pressed

function buttonAnimation(currentKey) {

    // this selects the different class when the key is pressed accordingly
    var pressedButton = document.querySelector("." + currentKey);

    // this add the class pressed when the key is pressed
    pressedButton.classList.add("pressed");

    // this function removes the class pressed after time interval
    setTimeout(function () {
        pressedButton.classList.remove("pressed");

    }, 100);

}