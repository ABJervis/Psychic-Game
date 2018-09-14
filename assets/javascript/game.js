//create computer guess choices
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split("");

//define variables
var wins = 0;
var losses = 0;
var guessSoFar = [];
var guessesNumber = 9;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("loss-text");
var guessesMade = document.getElementById("guessSoFar");
var numberLeft = document.getElementById("guessesLeft");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
//define functions that will be used to run the game

//need to set reset so the game can be re-played

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(event)

//if user guesses correctly - alert is more for me than a part of the game

if(userGuess === computerGuess){
    wins++;
    alert("Congratulations!") 
}

//if user guess incorrectly - alert is more for me than a part of the game


if(userGuess !== computerGuess){
    guessesNumber --;
    
    alert("Try again!");
}


if(guessesNumber < 1){
    alert("Game Over")
}

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesMade.textContent = "Guesses so Far: " + userGuess;
numberLeft.textContent = "Guesses Left" - guessesLeft;


}

//need to learn how to display results to the page. cannot figure out how to get them to show, 
//there's return and push and textcontent, not sure how to go 
