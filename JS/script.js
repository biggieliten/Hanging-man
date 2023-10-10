/////////////////////Luka Random Generator ///////////////////////////////
let randomWord = ["apple", "banana", "cherry", "grape", "orange", "pear"];

function randomWordGenerator(randomWord) {
  return randomWord[Math.floor(Math.random() * randomWord.length)];
}
const randomWordChosen = randomWordGenerator(randomWord);
console.log(randomWordChosen);
const randomWordChosenArray = randomWordChosen.split(``);
console.log(randomWordChosenArray);
///////////////////////////check letter Luka////////////////////////////////
let inputLetter = document.querySelector(`#letter1`);
let inputWord = document.querySelector(`#letter1`);
let result = document.querySelector(`#result`);

inputLetter.addEventListener(`input`, (checkLetter) => {
  let letter = checkLetter.target.value.toLowerCase();
  if (randomWordChosenArray.includes(letter)) {
    for (let i = 0; i < randomWordChosenArray.length; i++) {
      if (letter === randomWordChosenArray[i]) {
        console.log("Correct!");
      }
      console.log(randomWordChosenArray[i]);
    }
  } else {
    console.log("Incorrect!");
  }
});
/////////////////////////output lines with amount of letters Luka //////////////////

// function outputLines(randomWordChosenArray) {
//   for (let i = 0; i < randomWordChosenArray.length; i++) {
//     result.innerHTML += randomWordChosenArray[i] + `-`;
//   }
// }

// outputLines(randomWordChosenArray);
let paragraph = document.querySelector(`#outputLines`);
paragraph.innerHTML = `${randomWordChosenArray[i]}`;
