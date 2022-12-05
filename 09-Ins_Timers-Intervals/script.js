// Selects element by class
// This class is in HTML
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 5;

function setTime() {
  // Sets interval in variable
  // This is a call back function (NEW!) the first part of it is from the blue {} (known as the action), the second part is 1000
  // This function is already premade in browser, we're literally editing the arguments that are complex!
  var timerInterval = setInterval(function() {
    secondsLeft--;
    // Secondleft will go down as we increment
    timeEl.textContent = secondsLeft + " seconds left till SUSSY!";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/sussy.png")
  imgEl.setAttribute("style", "width: 100%" )
  mainEl.appendChild(imgEl);

}

setTime();
