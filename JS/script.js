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
/////////////////////Luka Random Generator ///////////////////////////////
// word database Array //
let randomWord = [
  // Animals
  "Giraffe",
  "Platypus",
  "Rhinoceros",
  "Chimpanzee",
  "Alligator",
  "Porcupine",
  "Kangaroo",

  // Countries
  "Australia",
  "Madagascar",
  "Switzerland",
  "Kazakhstan",
  "Venezuela",
  "Philippines",
  "Bangladesh",

  // Fruits
  "Blueberry",
  "Raspberry",
  "Pomegranate",
  "Blackberry",
  "Watermelon",
  "Strawberry",
  "Pineapple",

  // Tech Terms
  "Blockchain",
  "Algorithm",
  "Database",
  "Encryption",
  "Interface",
  "Javascript",
  "Framework",

  // Space
  "Constellation",
  "Astronaut",
  "Meteorite",
  "Satellite",
  "Nebula",
  "Universe",
  "Galaxy",

  // Fantasy
  "Dragon",
  "Unicorn",
  "Werewolf",
  "Sorcerer",
  "Vampire",
  "Minotaur",
  "Phoenix",

  // Historical Figures
  "Cleopatra",
  "Napoleon",
  "Leonardo",
  "Shakespeare",
  "Galileo",
  "Aristotle",
  "Genghis",
];
// takes a random word from randomWord array and spits it in single indexes in a new array randomWordChosenArray //
function randomWordGenerator(randomWord) {
  return randomWord[Math.floor(Math.random() * randomWord.length)];
}
const randomWordChosen = randomWordGenerator(randomWord);
const randomWordChosenArray = randomWordChosen.split(``);
///////////////////////////check letter Luka and output letter ////////////////////////////////
// Array to store the letters that the user has guessed incorrectly upp to max 5 wrong guesses
let wrongLetterArray = [];
// Array to store all the letters that the user has guessed.
let guessedLetters = [];
let inputLetter = document.querySelector(`#letter1`);
//let inputWord = document.querySelector(`#letter1`); // potential word guess can be implemented
let result = document.querySelector(`#result`);
let wrongLetter = document.querySelector(`#letterLog`);
let hiddenWord = Array(randomWordChosenArray.length).fill(`_`);
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
  // Compare the current state of 'hiddenWord' with the 'randomWordChosenArray'.
  // If they are the same, it means the user has guessed the entire word correctly.
  if (hiddenWord.toString() === randomWordChosenArray.toString()) {
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
    // Check if the guessed letter is in the 'randomWordChosenArray'.
    if (randomWordChosenArray.includes(letter)) {
      // Loop through each letter in the 'randomWordChosenArray'.
      for (let i = 0; i < randomWordChosenArray.length; i++) {
        // If the guessed letter matches a letter in the 'randomWordChosenArray'.
        if (letter === randomWordChosenArray[i]) {
          // Replace the underscore in the 'hiddenWord' array with the correct letter.
          hiddenWord[i] = letter;
          // Update the displayed word with the correctly guessed letters.
          paragraph.innerHTML = hiddenWord.join(" ");
          // Calls on the function to Check if the user has won.
          youWon();
        }
      }
      // If the guessed letter is not in the 'randomWordChosenArray'.
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
/////////////////////////output lines with amount of letters Luka //////////////////

//get the length of the word from using sting.length
// compare string.length to length of the word
// print out _ form the value from string.length

/////////////////////// BONNIE SVG ///////////////////////////////
// Get the SVG elements for each part of the hangman drawing.
let svgGround = document.getElementById("ground");
let svgHead = document.getElementById("head");
let svgBody = document.getElementById("body");
let svgArms = document.getElementById("arms");
let svgLegs = document.getElementById("legs");
let svgScaffold = document.getElementById("scaffold");
// Get the button element.
let btn = document.querySelector("button");
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
