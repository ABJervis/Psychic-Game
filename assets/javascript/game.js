//create computer guess choices
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split("");

//variables to count wins, losses, etc.
var wins = 0
var losses = 0
var guessSoFar = []
var guessesNumber = 10

//variables to hold references to places in the HTML

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("loss-text");
var guessSoFarText = document.getElementById("guessSoFar");
var guessesNumberText = document.getElementById("guessesLeft");


// Randomly chooses a choice from the options array = Computer's guess. This has to done before user begins to guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(event)

//if user guesses correctly

if(userGuess === computerGuess){
    wins++;
    alert("Congratulations!")
}

//if user guess incorrectly

if(userGuess !== computerGuess){
    guessesNumber --;
    alert("Try again!");

}



}