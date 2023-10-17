// Set the starting time for the countdown timer in minutes.
const startingTime = 5;
// Convert the starting time to seconds.
let totalTime = startingTime * 60;
// Get the HTML element where the timer will be displayed.
let countdown = document.getElementById("timer");
// Create a timer that runs every second (1000 milliseconds).
const timer = setInterval(function () {
  // Calculate the number of minutes remaining.
  minutes = Math.floor(totalTime / 60);
  // Calculate the number of seconds remaining.
  let seconds = totalTime % 60;
  // If the seconds are negative, stop the timer and alert the user.
  if (seconds < 0) {
    clearInterval(timer);
    alert("Time is out!! - Press: -OK- to play again");
    location.reload();
    // If the seconds are zero, display the timer with an extra zero for formatting.
  } else if (seconds === 0) {
    countdown.innerHTML = "0" + minutes + ":" + seconds + "0";
    // If the seconds are less than 10, display the timer with a leading zero for seconds.
  } else if (seconds < 10) {
    countdown.innerHTML = "0" + minutes + ":" + "0" + seconds;
    // Otherwise, display the timer normally.
  } else {
    countdown.innerHTML = "0" + minutes + ":" + seconds;
  }
  // Decrease the total time by one second.
  totalTime--;
}, 1000);
console.log("Nice Try");

// word database Array //
let randomWord = [
  //Names
  "luka",
  "filip",
  "bonnie",
  "andreas",
  // Animals
  "giraffe",
  "platypus",
  "rhinoceros",
  "chimpanzee",
  "alligator",
  "porcupine",
  "kangaroo",

  // Countries
  "australia",
  "madagascar",
  "switzerland",
  "kazakhstan",
  "venezuela",
  "philippines",
  "bangladesh",

  // Fruits
  "blueberry",
  "raspberry",
  "pomegranate",
  "blackberry",
  "watermelon",
  "strawberry",
  "pineapple",

  // Tech Terms
  "blockchain",
  "algorithm",
  "database",
  "encryption",
  "interface",
  "javascript",
  "framework",

  // Space
  "constellation",
  "astronaut",
  "meteorite",
  "satellite",
  "nebula",
  "universe",
  "galaxy",

  // Fantasy
  "dragon",
  "unicorn",
  "werewolf",
  "sorcerer",
  "vampire",
  "minotaur",
  "phoenix",

  // Historical Figures
  "cleopatra",
  "napoleon",
  "leonardo",
  "shakespeare",
  "galileo",
  "aristotle",
  "genghis",
];

// takes a random word from randomWord array and spits it in single indexes in a new array randomWordChoseSplit //
function randomWordGenerator(randomWord) {
  return randomWord[Math.floor(Math.random() * randomWord.length)];
}
const randomWordChosen = randomWordGenerator(randomWord);
const randomWordChoseSplit = randomWordChosen.split(``);

// Array to store the letters that the user has guessed incorrectly upp to max 5 wrong guesses
let wrongLetterArray = [];
// Array to store all the letters that the user has guessed.
let guessedLetters = [];
let inputLetter = document.querySelector(`#letter1`);
//let inputWord = document.querySelector(`#letter1`); // potential word guess can be implemented
let result = document.querySelector(`#result`);
let wrongLetter = document.querySelector(`#letterLog`);
let hiddenWord = Array(randomWordChoseSplit.length).fill(`_`);
let paragraph = document.querySelector(`#outputLines`);

// Display the underscores in the paragraph element.
paragraph.innerHTML = `${hiddenWord}`;

// Function to check if the game is over.
function gameOver() {
  // If the user has guessed more than 5 letters incorrectly.
  if (wrongLetterArray.length > 5) {
    // Wait for 200 milliseconds (0.2 seconds) before executing the code inside.
    setTimeout(() => {
      // Displays an alert to user
      alert(
        `Game Over!  The word you are looking for is: ${randomWordChosen}` +
          "  " +
          " Press: -OK- if you want to play again"
      );
      location.reload();
    }, 200);
  }
}

// Function to check if the user has won the game.
function youWon() {
  // Compare the current state of 'hiddenWord' with the 'randomWordChoseSplit'.
  // If they are the same, it means the user has guessed the entire word correctly.
  if (hiddenWord.toString() === randomWordChoseSplit.toString()) {
    setTimeout(() => {
      alert("WOW You Won !!! " + " Press: -OK- if you want to play again");
      location.reload();
    }, 200);
  }
}

// Add an event listener to the 'inputLetter' element that triggers when the user provides input.
inputLetter.addEventListener(`input`, (checkLetter) => {
  // Convert the user's input to lowercase for consistency.

  let letter = checkLetter.target.value.toLowerCase();
  // Check if the letter has not been guessed before.

  if (!guessedLetters.includes(letter)) {
    // Add the letter to the 'guessedLetters' array.
    guessedLetters.push(letter);
    // Check if the guessed letter is in the 'randomWordChoseSplit'.
    if (randomWordChoseSplit.includes(letter)) {
      // Loop through each letter in the 'randomWordChoseSplit'.
      for (let i = 0; i < randomWordChoseSplit.length; i++) {
        // If the guessed letter matches a letter in the 'randomWordChoseSplit'.
        if (letter === randomWordChoseSplit[i]) {
          // Replace the underscore in the 'hiddenWord' array with the correct letter.
          hiddenWord[i] = letter;
          // Update the displayed word with the correctly guessed letters.
          paragraph.innerHTML = hiddenWord.join(" ");
          // Calls on the function to Check if the user has won.
          youWon();
        }
      }
      // If the guessed letter is not in the 'randomWordChoseSplit'.
    } else {
      // Display the incorrect letter.
      wrongLetter.innerHTML += letter;
      // Increment the index for the SVG parts (for hangman visualization).
      index = index + 1;
      // Display the next SVG part.
      svgParts[index].style.display = "block";
      // Add the incorrect letter to the 'wrongLetterArray'.
      wrongLetterArray.push(letter);

      // Calls on the function to Check if the game is over.
      gameOver();
    }
    // If the letter has already been guessed, alert the user.
  } else if (guessedLetters.includes(letter)) {
    alert(letter + " <- already guessed");
  }
  // Clear the input field after processing the user's guess.
  inputLetter.value = "";
});

// Get the SVG elements for each part of the hangman drawing.
let svgGround = document.getElementById("ground");
let svgHead = document.getElementById("head");
let svgBody = document.getElementById("body");
let svgArms = document.getElementById("arms");
let svgLegs = document.getElementById("legs");
let svgScaffold = document.getElementById("scaffold");

// Create an array of all the SVG parts in the order they should be displayed.
let svgParts = [svgGround, svgHead, svgScaffold, svgLegs, svgArms, svgBody];
// Initialize an index variable to -1. This will be used to control which SVG part is displayed.
let index = -1;

// Loop through each SVG part.
svgParts.forEach((part, i) => {
  // If the current SVG part's index does not match the 'index' variable, hide it.
  if (i !== index) {
    part.style.display = "none";
  }
});
