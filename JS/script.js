const startingTime = 5;
let totalTime = startingTime * 60;
let countdown = document.getElementById("timer");

const timer = setInterval(function () {
  minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 0) {
    clearInterval(timer);
    alert("Tiden är ute!");
  } else if (seconds === 0) {
    countdown.innerHTML = "0" + minutes + ":" + seconds + "0";
  } else if (seconds < 10) {
    countdown.innerHTML = "0" + minutes + ":" + "0" + seconds;
  } else {
    countdown.innerHTML = "0" + minutes + ":" + seconds;
  }

  totalTime--;
}, 1000);
console.log(totalTime);
/////////////////////Luka Random Generator ///////////////////////////////
let randomWord = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "orange",
  "pear",
  "pineapple",
  "strawberry",
  "watermelon",
  "kiwi",
  "dog",
  "cat",
  "elephant",
  "orca",
  "leon",
  "syntax",
  "javascript",
  "html",
  "css",
  "python",
  "java",
  "werewolf",
];

function randomWordGenerator(randomWord) {
  return randomWord[Math.floor(Math.random() * randomWord.length)];
}
const randomWordChosen = randomWordGenerator(randomWord);
console.log(randomWordChosen);
const randomWordChosenArray = randomWordChosen.split(``);
console.log(randomWordChosenArray);
///////////////////////////check letter Luka and output letter ////////////////////////////////
let wrongLetterArray = [];
let rightLetterArray = [];
let inputLetter = document.querySelector(`#letter1`);
let inputWord = document.querySelector(`#letter1`);
let result = document.querySelector(`#result`);
// let rightLetter = document.querySelector(`#rightLetter`);
let wrongLetter = document.querySelector(`#letterLog`);
let hiddenWord = Array(randomWordChosenArray.length).fill(`_`);
let paragraph = document.querySelector(`#outputLines`);
paragraph.innerHTML = `${hiddenWord}`;
function gameOver() {
  if (wrongLetterArray.length > 6) {
    alert(
      `Game Over! ${randomWordChosen}` + " Press OK if you want to play again"
    );
    location.reload();
  }
}
function youWon() {
  if (rightLetterArray.length === randomWordChosenArray.length) {
    alert("WOW You Won " + " Press OK if you want to play again");
    location.reload();
  } else {
    return;
  }
}

inputLetter.addEventListener(`input`, (checkLetter) => {
  let letter = checkLetter.target.value.toLowerCase();
  if (randomWordChosenArray.includes(letter)) {
    for (let i = 0; i < randomWordChosenArray.length; i++) {
      if (letter === randomWordChosenArray[i]) {
        console.log("Correct!");
        hiddenWord[i] = letter; // Replace the underscore with the correct letter
        paragraph.innerHTML = hiddenWord.join(" ");
        youWon();
        // rightLetter.innerHTML += [i, letter, `-`];
        // rightLetterArray.push(letter);
        // console.log(rightLetterArray);
      }
      console.log(randomWordChosenArray[i]);
    }
  } else {
    console.log("Incorrect!");
    wrongLetter.innerHTML += letter;
    index = index + 1;
    svgParts[index].style.display = "block";
    wrongLetterArray.push(letter);
    console.log(wrongLetterArray);
    gameOver();
  }
  inputLetter.value = "";
});
/////////////////////////output lines with amount of letters Luka //////////////////

//get the length of the word from using sting.length
// compare string.length to length of the word
// print out _ form the value from string.length

// BONNIE

let svgGround = document.getElementById("ground");
let svgHead = document.getElementById("head");
let svgBody = document.getElementById("body");
let svgArms = document.getElementById("arms");
let svgLegs = document.getElementById("legs");
let svgScaffold = document.getElementById("scaffold");
let btn = document.querySelector("button");
let gameOverSvg = document.querySelector(`#Layer_1`);

let svgParts = [
  svgGround,
  svgHead,
  svgScaffold,
  svgLegs,
  svgArms,
  svgBody,
  gameOverSvg,
];

let index = -1;

svgParts.forEach((part, i) => {
  if (i !== index) {
    part.style.display = "none";
  }
});

// inputLetter.addEventListener("input", () => {
//   index = index + 1;
//   svgParts[index].style.display = "block";
// });
