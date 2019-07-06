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
// var winningCard = document.querySelector('.article__card')


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
  resetInputs();
  resetInnerHTML();
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
  submitTimeout();
  challenger1.innerHTML = nameInput1.value;
  challenger2.innerHTML = nameInput2.value;
  currentGuess1.innerHTML = guessInput1.value;
  currentGuess2.innerHTML = guessInput2.value;
  submitButton.disabled = true;
});

function submitTimeout() {
  setTimeout(guessFeedbackOne, 100);
  setTimeout(guessFeedbackTwo, 100);
}


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

    randNum = Math.floor(Math.random() * (parseInt(maxRangeInput) - parseInt(minRangeInput)) + parseInt(minRangeInput));
    console.log(randNum);
    return randNum;
   }

 function guessFeedbackOne() {
   if (guessInput1.value < randNum) {
     scoresStanding1.innerHTML = "that's too low";
   } else if (guessInput1.value > randNum) {
     scoresStanding1.innerHTML = "that's too high";
   } else {
     scoresStanding1.innerHTML = "BOOM!";
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
   }
 }

 function guessFeedbackTwo() {
   if (guessInput2.value < randNum) {
     scoresStanding2.innerHTML = "that's too low";
   } else if (guessInput2.value > randNum) {
     scoresStanding2.innerHTML = "that's too high";
   } else {
     scoresStanding2.innerHTML = "BOOM!";
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
   }
 }


 function resetInputs() {
   nameInput1.value = "";
   nameInput2.value = "";
   guessInput1.value = "";
   guessInput2.value = "";
   resetGameBtn.disabled = true;
   document.querySelector('.article__range--form').reset();
 }

 function resetInnerHTML() {
   challenger1.innerHTML = "Challenger Name 1";
   challenger2.innerHTML = "Challenger Name 2";
   currentGuess1.innerHTML = "?";
   currentGuess2.innerHTML = "?";
   scoresStanding1.innerHTML ="your standing";
   scoresStanding2.innerHTML ="your standing";
 }

