 var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  });


  document.addEventListener("keypress", function(event) {
      makeSound(event.key);

      buttonAnimation(event.key);
    })

  };

  function makeSound(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3"); //2
        tom1.play("tom-1.mp3");
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3"); //2
        tom2.play("tom-1.mp3");
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3"); //2
        tom3.play("tom-1.mp3");
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3"); //2
        tom4.play("tom-1.mp3");
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3"); //2
        snare.play("tom-1.mp3");
        break;

      case "k":
        var kick = new Audio("sounds/kick-bass.mp3"); //2
        kick.play("tom-1.mp3");
        break;

      case "l":
        var crash = new Audio("sounds/crash.mp3"); //2
        crash.play("tom-1.mp3");
        break;

      default:
        console.log(buttonInnerHTML);
    }
  }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout (function () {
    activeButton.classList.remove("pressed");
  }, 100 );
}

  //var audio = new Audio("sounds/tom-1.mp3"); //2
  //audio.play("tom-1.mp3");

  //alert("I got clicked!");   // 1
