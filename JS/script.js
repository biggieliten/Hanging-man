let randomWord = ["apple", "banana", "cherry", "grape", "orange", "pear"];

let inputLetter = document.querySelector(`#letter1`);
let inputWord = document.querySelector(`#letter1`);
let result = document.querySelector(`#result`);

inputLetter.addEventListener(`input`, () => {
  inputWord.value += inputLetter.value;
  result.textContent = inputWord.value;
  if (inputWord.value.length === randomWord.length) {
    inputWord.value = "";
    result.textContent = "";
    alert("You Win!");
    inputLetter.value = "";
    inputWord.value = "";
    result.textContent = "";
    return;
  }
});
