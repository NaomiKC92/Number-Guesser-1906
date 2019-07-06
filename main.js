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


// EVENT LISTENERS
// clear game button functionality
nameInput1.addEventListener('keyup', function() {
    if (nameInput1.value !== "") {
        clearGameBtn.disabled = false;
    }
});

nameInput2.addEventListener('keyup', function() {
    if (nameInput2.value !== "") {
        clearGameBtn.disabled = false;
    }
});

guessInput1.addEventListener('keyup', function() {
    if (guessInput1.value !== "") {
        clearGameBtn.disabled = false;
    }
});

guessInput2.addEventListener('keyup', function() {
    if (guessInput2.value !== "") {
        clearGameBtn.disabled = false;
    }
});

clearGameBtn.addEventListener('click', function(e) {
  e.preventDefault();
  nameInput1.value = "";
  nameInput2.value = "";
  guessInput1.value = "";
  guessInput2.value = "";
  clearGameBtn.disabled = true;
});

// reset button functionality
nameInput1.addEventListener('keyup', function() {
    if (nameInput1.value !== "") {
        resetGameBtn.disabled = false;
    }
});

nameInput2.addEventListener('keyup', function() {
    if (nameInput2.value !== "") {
        resetGameBtn.disabled = false;
    }
});

guessInput1.addEventListener('keyup', function() {
    if (guessInput1.value !== "") {
        resetGameBtn.disabled = false;
    }
});

guessInput2.addEventListener('keyup', function() {
    if (guessInput2.value !== "") {
        resetGameBtn.disabled = false;
    }
});

resetGameBtn.addEventListener('click', function(e) {
  e.preventDefault();
  generateRandomNum();
  nameInput1.value = "";
  nameInput2.value = "";
  guessInput1.value = "";
  guessInput2.value = "";
  resetGameBtn.disabled = true;
  document.querySelector('.article__range--form').reset();
});

// submit button functionality
nameInput1.addEventListener('keyup', function() {
    if (nameInput1.value !== "") {
        submitButton.disabled = false;
    }
});

nameInput2.addEventListener('keyup', function() {
    if (nameInput2.value !== "") {
        submitButton.disabled = false;
    }
});

guessInput1.addEventListener('keyup', function() {
    if (guessInput1.value !== "") {
        submitButton.disabled = false;
    }
});

guessInput2.addEventListener('keyup', function() {
    if (guessInput2.value !== "") {
        submitButton.disabled = false;
    }
});

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  challenger1.innerHTML = nameInput1.value;
  challenger2.innerHTML = nameInput2.value;
  currentGuess1.innerHTML = guessInput1.value;
  currentGuess2.innerHTML = guessInput2.value;
  submitButton.disabled = true;
});


// update button functionality
updateBtn.addEventListener('click', function(e) {
    e.preventDefault();
    updateRange();
    generateRandomNum();
});


//FUNCTIONS
function updateRange() {
    minRangeInput = document.querySelector('#range__input--min').value;
    maxRangeInput = document.querySelector('#range__input--max').value;

    setRangeLow.innerHTML = minRangeInput;
    minRangeInput.value = "";
    setRangeHigh.innerHTML = maxRangeInput;
    maxRangeInput.value = "";
   }

function generateRandomNum() {
    minRangeInput = document.querySelector('#range__input--min').value;
    maxRangeInput = document.querySelector('#range__input--max').value;

    var randNum = Math.floor(Math.random() * (parseInt(maxRangeInput) - parseInt(minRangeInput)) + parseInt(minRangeInput));
    console.log(randNum);
    return randNum;
   }
