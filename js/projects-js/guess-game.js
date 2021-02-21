let randomNumber;
let validAnswer;
let numberOfGuesses;
let playGame = false;

// variables to inform user
let message = document.getElementById("message");
let lastGuess = document.getElementById("last-guess");
let numberGuesses = document.getElementById("number-guesses");

let startButton = document.getElementById("start-game"); 

// variables related to the form
let form = document.getElementById("guess-form");
let userInput = document.getElementById("guess");

startButton.addEventListener("click", startGame);
form.addEventListener("submit", makeGuess)

function startGame() {
    if (playGame) {
        // message the player that the game is already started
        message.innerHTML = "There is already a game going, please finish this one 100before starting a new one.";
    } else {
        playGame = true;
        randomNumber = Math.floor(Math.random() * 100) + 1; // 1 - 100
        message.innerHTML = "Game has started and a number has been generated, start guessing!";
        numberGuesses.innerHTML = "";
        lastGuess.innerHTML = "";
        numberOfGuesses = 0;
    }
}

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

function makeGuess(e) {
    e.preventDefault();

    if (playGame) {
        let guess = parseInt(userInput.value);
        validateGuess(guess);

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
            userInput.value = ""; // reset input
        }
    } else {
        message.innerHTML = "Please start a game before guessing.";
        userInput.value = ""; // reset input
        numberGuesses.innerHTML = "";
        lastGuess.innerHTML = "";
    }
}