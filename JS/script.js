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
let inputLetter = document.querySelector(`#letter1`);
let inputWord = document.querySelector(`#letter1`);
let result = document.querySelector(`#result`);
let rightLetter = document.querySelector(`#rightLetter`);
let wrongLetter = document.querySelector(`#letterLog`);

inputLetter.addEventListener(`input`, (checkLetter) => {
  let letter = checkLetter.target.value.toLowerCase();
  if (randomWordChosenArray.includes(letter)) {
    for (let i = 0; i < randomWordChosenArray.length; i++) {
      if (letter === randomWordChosenArray[i]) {
        console.log("Correct!");
        rightLetter.innerHTML += randomWordChosenArray[i];
      }
      console.log(randomWordChosenArray[i]);
    }
  } else {
    console.log("Incorrect!");
    wrongLetter.innerHTML += letter;
  }
});
/////////////////////////output lines with amount of letters Luka //////////////////
let hiddenWord = Array(randomWordChosenArray.length).fill(`_`);
let paragraph = document.querySelector(`#outputLines`);
paragraph.innerHTML = `${hiddenWord}`;

//get the length of the word from using sting.length
// compare string.length to length of the word
// print out _ form the value from string.length
