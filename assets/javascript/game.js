var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

// need an empty array to hold the guessed letters, this will be posted back to the page for user reference
var guessedLetters = [];

//need a countdown to allow for only 10 guesses, start at 9
var guessesLeft = 9;

//create counter for wins/losses
var wins = 0;
var losses = 0;

//define functions that will be used to run the game: get random letter, update # of guesses left and guesses so far

//grab the HTML element and set it equal to the guesses left
var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

//create the random letter to guess based on generator using the letter array from above, only letters a to e)
var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random()* letters.length)];
};

//keep track of letters guessed and display for user reference
var updateGuessesSoFar = function() {
    document.querySelector("#guess-so-far").innerHTML = guessedLetters.join(", ");
};


//create function set reset so the game can be re-played, set everything back to the beginning, guesses left counter starts over...etc.

var reset = function(){
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

//call to run on page load.

updateLetterToGuess();
updateGuessesLeft();

// This function is run whenever the user presses a key.
document.onkeydown = function(event) {
    //reduce guesses left by one
    guessesLeft--;
    //place to lowercase 
    var letter = String.fromCharCode(event.which).toLowerCase();

    //add guessed letter to the guessedLetters array
    guessedLetters.push(letter);

    //then run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();

    // compare letter selected to random letter chosen.
    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        //reset the game
        reset();
    }

    if (guessesLeft === 0){
        //update losses to reflect loss
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        //call the reset
        reset();
    }
};
