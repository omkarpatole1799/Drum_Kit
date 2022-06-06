console.log("Welcome to drum kit");

for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
       var innerHTML = this.innerHTML;

    //    switch (innerHTML) {
    //        case "w":
    //            var crashSound = new Audio("sounds/crash.mp3");
    //            crashSound.play();
    //            break;

    //         case "a":
    //             var kickBass = new Audio("sounds/kick-bass.mp3");
    //             kickBass.play();
    //             break;
       
    //         case "s":
    //             var snare = new Audio("sounds/snare.mp3");
    //             snare.play();
    //             break;
            
    //         case "d":
    //             var tom1 = new Audio("sounds/tom-1.mp3");
    //             tom1.play();
    //             break;
            
    //         case "j":
    //             var tom2 = new Audio("sounds/tom-2.mp3");
    //             tom2.play();
            
    //         case "k":
    //             var tom3 = new Audio("soundstom-3.mp3");
    //             tom3.play();
    //             break;
                
    //         case "l":
    //             var tom4 = new Audio("sounds/tom-4.mp3");
    //             tom4.play();
    //             break;

    //         default: 
    //             console.log(innerHTML);
    //             break;
    //     }
        

        if(innerHTML === "w"){
            this.style.color = "white";
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        }
        else if (innerHTML === "a") {
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        }
        else if (innerHTML === "s") {
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        }
        else if (innerHTML === "d") {
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        }
        else if (innerHTML === "j") {
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        }
        else if (innerHTML === "k") {
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        }
        else if (innerHTML === "l") {
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        }
        else {
            console.log(innerHTML);
        }
    });
}


