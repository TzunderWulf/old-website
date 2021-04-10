window.addEventListener('load', init)

let randomNumber;
let validAnswer;
let numberOfGuesses;
let playGame = false;

// variables to inform user
const message = document.getElementById("message");
const lastGuess = document.getElementById("last-guess");
const numberGuesses = document.getElementById("number-guesses");

function init() {
    const startButton = document.getElementById("start-game");
    startButton.addEventListener("click", startGame);

    const inputForm = document.getElementById("guess-form");
    inputForm.addEventListener("submit", makeGuess)
}

/**
 * When player presses start button, start a game and reset the variables.
 * Or when a game is already going, tell the player.
*/
function startGame() {
    if (playGame) {
        message.innerHTML = `There is already a game going, please finish 
        this one before starting a new one.`;
    } else {
        playGame = true;
        // Generate number between 1 and 100
        randomNumber = Math.floor(Math.random() * 100) + 1;
        message.innerHTML = `Game has started and a number has been generated, 
        start guessing!`;
        // Reset all HTML elements and variables
        numberGuesses.innerHTML = "";
        lastGuess.innerHTML = "";
        numberOfGuesses = 0;
    }
}

/**
 * After a guess has been made, make sure it is valid.
 * 
 * @param madeGuess
*/
function validateGuess(madeGuess) {
    if (isNaN(madeGuess)) {
        message.innerHTML = "Please enter a valid number.";
        validAnswer = false;
    } else if (madeGuess < 1) {
        message.innerHTML = "Please enter a number above 0.";
        validAnswer = false;
    } else if (madeGuess > 100) {
        message.innerHTML = "Please enter a number below 100.";
        validAnswer = false;
    } else {
        validAnswer = true;
    }
}

/**
 * After the form-field has been submitted, check if a game is running
 * and if so validate the guess made. Is the guess valid, check if it
 * is right and send a message back to the user.
 * 
 * @param e
*/
function makeGuess(e) {
    e.preventDefault(); // Make sure page doesn't refresh
    let userInput = document.getElementById("guess");

    // Check if a game has started
    if (playGame) {
        let guess = parseInt(userInput.value);
        validateGuess(guess); // Make sure guess is valid

        // If guess is valid, compare guess and random number
        if (validAnswer) {
            if (guess > randomNumber) {
                message.innerHTML = "Guess lower next time.";
            } else if (guess < randomNumber) {
                message.innerHTML = "Guess higher next time.";
            } else {
                message.innerHTML = `You've guessed the right number, it was indeed ${randomNumber}.`;
                playGame = false;
            }
            numberOfGuesses += 1;
            lastGuess.innerHTML = `Last guess: ${userInput.value}`;
            numberGuesses.innerHTML = `Number of guesses: ${numberOfGuesses}`;
            userInput.value = ""; // Reset input
        }
    } else {
        message.innerHTML = "Please start a game before guessing.";
        userInput.value = ""; // Reset input
        numberGuesses.innerHTML = "";
        lastGuess.innerHTML = "";
    }
}