//variables to count wins, losses, etc.
var wins = 0
var losses = 0
var guessSoFar = []
var guessesLeft = 9
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Randomly chooses a choice from the options array = Computer's guess. This has to done before user begins to guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

 
//correct guesses

if (userGuess === computerChoices){
    wins++;
    guessSoFar = 9;
    guessesLeft = [];

    }
//incorrect guesses

if (userGuess !== computerChoices){
    guessesLeft--;
}

if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guessSoFar = []
}
 
     //variables to tie into the html
    
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("loss-text");
  var guessesMade = document.getElementById("guessSoFar");
  var numberLeft = document.getElementById("guessesLeft");

  if (guessSoFar > 0){
    numberLeft.push(userGuess);
    console.log(userGuess);

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesMade.textContent = "Guesses so Far: " + userGuess;
    numberLeft.textContent = "Guesses Left" - guessesLeft;
    
    }
  



}
    
    
