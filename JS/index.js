console.log("Welcome to drum kit");


for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {

    // for mouse click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
       var buttonInnerHTML = this.innerHTML;
       playDrumBeats(buttonInnerHTML);
        
    });
}

// for keyboard button press
document.addEventListener("keypress", function(omkar) {
    playDrumBeats(omkar.key);
   
});

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