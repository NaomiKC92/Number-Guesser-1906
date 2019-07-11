var updateBtn = document.querySelector('.range__btn--update');
var setRangeLow = document.querySelector('#range__lower--num');
var setRangeHigh = document.querySelector('#range__higher--num');
var minRangeInput = document.querySelector('#range__input--min');
var maxRangeInput = document.querySelector('#range__input--max');
var nameInput1 = document.querySelector('#challenge__input--name1');
var nameInput2 = document.querySelector('#challenge__input--name2');
var guessInput1 = document.querySelector('#challenge__input--guess1');
var guessInput2 = document.querySelector('#challenge__input--guess2');
var submitButton = document.querySelector('.btn__submit-guess');
var challenger1 = document.querySelector('.article__display--name1');
var challenger2 = document.querySelector('.article__display--name2');
var currentGuess1 = document.querySelector('#article__scores--number1');
var currentGuess2 = document.querySelector('#article__scores--number2');
var clearGameBtn = document.querySelector('.btn__clear-game');
var resetGameBtn = document.querySelector('.btn__reset-game');
var scoresStanding1 = document.querySelector('#scores__standing--player1');
var scoresStanding2 = document.querySelector('#scores__standing--player2');
var cardSection = document.querySelector('.main__section--right');
var defaultMin = 1;
var defaultMax = 100;
var errorRange = document.querySelector('.input__error--range');
var errorImg = document.querySelector('.challenge__input--img');
var rangeError1 = document.querySelector('.error__guess1-range');
var rangeErrorMsg1 = document.querySelector('.error__guess1-range-msg');
var rangeError2 = document.querySelector('.error__guess2-range');
var rangeErrorMsg2 = document.querySelector('.error__guess2-range-msg');
var emptyGuess1 = document.querySelector('.error__guess1-empty');
var emptyGuessMsg1 = document.querySelector('.error__guess1-empty-msg');
var emptyName1 = document.querySelector('.error__name1-empty');
var emptyNameMsg1 = document.querySelector('.error__name1-empty-msg');
var emptyName2 = document.querySelector('.error__name2-empty');
var emptyNameMsg2 = document.querySelector('.error__name2-empty-msg');
var rangeInputError1= document.querySelector('.error__set--range1');
var rangeInputErrorMsg1 = document.querySelector('.error__set--range-msg1');
var rangeInputError2= document.querySelector('.error__set--range2');
var rangeInputErrorMsg2 = document.querySelector('.error__set--range-msg2');

// EVENT LISTENERS
// CLEAR BUTTON FUNCTIONALITY
guessInput1.addEventListener('keyup', enableClearBtn)

guessInput2.addEventListener('keyup', enableClearBtn)

clearGameBtn.addEventListener('click', function(e) {
  e.preventDefault();
  guessInput1.value = "";
  guessInput2.value = "";
  emptyName1.hidden = true;
  emptyNameMsg1.hidden = true;
  nameInput1.classList.remove('input__error--border');
  emptyName2.hidden = true;
  emptyNameMsg2.hidden = true;
  nameInput2.classList.remove('input__error--border');
  rangeError1.hidden = true;
  rangeErrorMsg1.hidden = true;
  guessInput1.classList.remove('input__error--border');
  rangeError2.hidden = true;
  rangeErrorMsg2.hidden = true;
  guessInput2.classList.remove('input__error--border');
  clearGameBtn.disabled = true;
});

// RESET BUTTON FUNCTIONALITY
nameInput1.addEventListener('keyup', enableReset)

nameInput2.addEventListener('keyup', enableReset)

guessInput1.addEventListener('keyup', enableReset)

guessInput2.addEventListener('keyup', enableReset)

resetGameBtn.addEventListener('click', function(e) {
  e.preventDefault();
  generateRandomNum(1, 100);
  resetInputs();
  resetInnerHTML();
  emptyName1.hidden = true;
  emptyNameMsg1.hidden = true;
  nameInput1.classList.remove('input__error--border');
  emptyName2.hidden = true;
  emptyNameMsg2.hidden = true;
  nameInput2.classList.remove('input__error--border');
  rangeError1.hidden = true;
  rangeErrorMsg1.hidden = true;
  guessInput1.classList.remove('input__error--border');
  rangeError2.hidden = true;
  rangeErrorMsg2.hidden = true;
  guessInput2.classList.remove('input__error--border');
  clearGameBtn.disabled = true;
  submitButton.disabled = true;
});

// SUBMIT BUTTON FUNCTIONALITY
nameInput1.addEventListener('keyup', enableSubmit)

nameInput2.addEventListener('keyup', enableSubmit)

guessInput1.addEventListener('keyup', enableSubmit)

guessInput2.addEventListener('keyup', enableSubmit)

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  var validity = stayInRange();
  var nameValidity = writeInName();
  if (validity === true && nameValidity === true) {
  submitTimeout();
  challenger1.innerHTML = nameInput1.value.toUpperCase();
  challenger2.innerHTML = nameInput2.value.toUpperCase();
  currentGuess1.innerHTML = parseInt(guessInput1.value);
  currentGuess2.innerHTML = parseInt(guessInput2.value);
  submitButton.disabled = true;
  };
});

// UPDATE BUTTON FUNCTIONALITY //
minRangeInput.addEventListener('keyup', enableUpdateBtn);

maxRangeInput.addEventListener('keyup', enableUpdateBtn);

updateBtn.addEventListener('click', function(e) {
    e.preventDefault();
      checkErrors(e);
      if (verifyRange == true) {
      updateRange();
      setCustomRange();
      }
});

// FUNCTIONS //
generateRandomNum(defaultMin, defaultMax);

function generateRandomNum(min, max) {
    randNum = Math.floor(Math.random() * (max - min) + min);
    console.log(randNum);
    return randNum;
   };

function checkErrors(e) {
    e.preventDefault(e);
    if (minRangeInput.value > maxRangeInput.value && maxRangeInput.value < minRangeInput.value) {
    document.querySelector('#range__input--min').style.border = "2px solid #dd1972";
    document.querySelector('#range__input--max').style.border = "2px solid #dd1972";
    document.querySelector('.range__btn--update').style.margin = "0 0 20px 0";
    rangeInputError1.hidden = false;
    rangeInputErrorMsg1.hidden = false;
    rangeInputError2.hidden = false;
    rangeInputErrorMsg2.hidden = false;
    verifyRange = false;
    } else {
    e.preventDefault();
    document.querySelector('#range__input--min').style.border = "2px solid #d0d2d3";
    document.querySelector('#range__input--max').style.border = "2px solid #d0d2d3";
    document.querySelector('.range__btn--update').style.margin = "0 0 0 0";
    rangeInputError1.hidden = true;
    rangeInputErrorMsg1.hidden = true;
    rangeInputError2.hidden = true;
    rangeInputErrorMsg2.hidden = true;
    verifyRange = true;
  };
  };

function updateRange() {
    minRangeInput = document.querySelector('#range__input--min').value;
    maxRangeInput = document.querySelector('#range__input--max').value;
    setRangeLow.innerHTML = minRangeInput || 1;
    minRangeInput.value = "";
    setRangeHigh.innerHTML = maxRangeInput || 100;
    maxRangeInput.value = "";
  };

function setCustomRange(min, max) {
    defaultMin = minRangeInput;
    defaultMax = maxRangeInput;
    generateRandomNum(parseInt(defaultMin), parseInt(defaultMax));
  };

function stayInRange() {
    var valid = true;
    if (guessInput1.value === "" || parseInt(guessInput1.value) < parseInt(setRangeLow.innerHTML) || parseInt(guessInput1.value) > parseInt(setRangeHigh.innerHTML)) {
        valid = false;
        guessInput1.classList.add('input__error--border');
        rangeError1.hidden = false;
        rangeErrorMsg1.hidden = false;
    };

    if (valid === true) {
        rangeError1.hidden = true;
        rangeErrorMsg1.hidden = true;
        guessInput1.classList.remove('input__error--border');
    };

    if (guessInput2.value === "" || parseInt(guessInput2.value) < parseInt(setRangeLow.innerHTML) || parseInt(guessInput2.value) > parseInt(setRangeHigh.innerHTML)) {
        valid = false;
        guessInput2.classList.add('input__error--border')
        rangeError2.hidden = false;
        rangeErrorMsg2.hidden = false;
    };

    if (valid === true) {
        rangeError2.hidden = true;
        rangeErrorMsg2.hidden = true;
        guessInput2.classList.remove('input__error--border');
    };
    return valid;
};

function writeInName() {
  var valid = true;
  if (nameInput1.value === "") {
    emptyName1.hidden = false;
    emptyNameMsg1.hidden = false;
    nameInput1.classList.add('input__error--border');
    valid = false;
  };

  if (valid === true) {
    emptyName1.hidden = true;
    emptyNameMsg1.hidden = true;
    nameInput1.classList.remove('input__error--border');
  };

  if (nameInput2.value === "") {
    emptyName2.hidden = false;
    emptyNameMsg2.hidden = false;
    nameInput2.classList.add('input__error--border');
    valid = false;
  };

  if (valid === true) {
    emptyName2.hidden = true;
    emptyNameMsg2.hidden = true;
    nameInput2.classList.remove('input__error--border');
  };
  return valid;
};

 function guessFeedbackOne() {
   if (parseInt(guessInput1.value) < randNum) {
     scoresStanding1.innerHTML = "that's too low";
   } else if (guessInput1.value > randNum) {
     scoresStanding1.innerHTML = "that's too high";
   } else {
     scoresStanding1.innerHTML = "BOOM!";
     plusMinTen();
     cardSection.insertAdjacentHTML("afterbegin",
        `<article class="article__card">
          <article class="article__card--header">
            <h4>${challenger1.innerHTML}</h4>
            <p class="card__p--vs">vs</p>
            <h4>${challenger2.innerHTML}</h4>
          </article>
          <article class="article__card--win">
            <h5 class="card__winner-name">${challenger1.innerHTML}</h5>
            <h5 class="article__card--h1--lighter">WINNER</h5>
          </article>
          <article class="article__card--data">
            <p class="card__data--p"><span class="card_data--p--bold">47</span> GUESSES</p>
            <p class="card__data--p"><span class="card_data--p--bold">1.35</span> MINUTES</p>
            <img src="images/close_btn.png" class="article__card--img">
          </article>
        </article>`)
   };
 };

 function guessFeedbackTwo() {
   if (parseInt(guessInput2.value) < randNum) {
     scoresStanding2.innerHTML = "that's too low";
   } else if (guessInput2.value > randNum) {
     scoresStanding2.innerHTML = "that's too high";
   } else {
     scoresStanding2.innerHTML = "BOOM!";
     plusMinTen();
     cardSection.insertAdjacentHTML("afterbegin",
        `<article class="article__card">
          <article class="article__card--header">
            <h4>${challenger1.innerHTML}</h4>
            <p class="card__p--vs">vs</p>
            <h4>${challenger2.innerHTML}</h4>
          </article>
          <article class="article__card--win">
            <h5 class="card__winner-name">${challenger2.innerHTML}</h5>
            <h5 class="article__card--h1--lighter">WINNER</h5>
          </article>
          <article class="article__card--data">
            <p class="card__data--p"><span class="card_data--p--bold">47</span> GUESSES</p>
            <p class="card__data--p"><span class="card_data--p--bold">1.35</span> MINUTES</p>
            <img src="images/close_btn.png" class="article__card--img">
          </article>
        </article>`)
   };
 };

 function plusMinTen() {
   var min10 = setRangeLow.innerHTML - 10;
   setRangeLow.innerHTML = min10;
   var add10 = parseInt(setRangeHigh.innerHTML) + 10;
   setRangeHigh.innerHTML = add10;
   generateRandomNum(min10, add10)
 };

 function resetInputs() {
   nameInput1.value = "";
   nameInput2.value = "";
   guessInput1.value = "";
   guessInput2.value = "";
   resetGameBtn.disabled = true;
   document.querySelector('.article__range--form').reset();
 };

 function resetInnerHTML() {
   challenger1.innerHTML = "Challenger Name 1";
   challenger2.innerHTML = "Challenger Name 2";
   currentGuess1.innerHTML = "?";
   currentGuess2.innerHTML = "?";
   scoresStanding1.innerHTML = "your standing";
   scoresStanding2.innerHTML = "your standing";
   setRangeLow.innerHTML = 1;
   setRangeHigh.innerHTML = 100;
 };

 function submitTimeout() {
   setTimeout(guessFeedbackOne, 100);
   setTimeout(guessFeedbackTwo, 100);
 };

 function enableUpdateBtn() {
   if (minRangeInput.value !== "" && maxRangeInput.value !== "") {
       updateBtn.disabled = false;
   } else {
   updateBtn.disabled = true;
  };
};

 function enableClearBtn() {
  if (guessInput1.value !== "" || guessInput1.value !== ""  ) {
    clearGameBtn.disabled = false;
  } else {
  clearGameBtn.disabled = true;
 };
};

function enableReset() {
  if (nameInput1.value !== "" || nameInput2.value !== "" || guessInput1.value !== "" || guessInput2.value !== "") {
    resetGameBtn.disabled = false;
  } else {
  resetGameBtn.disabled = true;
 };
};

function enableSubmit() {
  if (nameInput1.value !== "" || nameInput2.value !== "" || guessInput1.value !== "" || guessInput2.value !== "") {
    submitButton.disabled = false;
  } else {
  submitButton.disabled = true;
 };
};
