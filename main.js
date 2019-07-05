var nameInput1 = document.querySelector('#challenge__input--name1');
var nameInput2 = document.querySelector('#challenge__input--name2');
var guessInput1 = document.querySelector('#challenge__input--guess1');
var guessInput2 = document.querySelector('#challenge__input--guess2');
var submitButton = document.querySelector('.btn__submit-guess');
var challenger1 = document.querySelector('.article__display--name1');
var challenger2 = document.querySelector('.article__display--name2');
var currentGuess1 = document.querySelector('#article__scores--number1');
var currentGuess2 = document.querySelector('#article__scores--number2');

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  challenger1.innerHTML = nameInput1.value;
  // nameInput1.value = "";
  challenger2.innerHTML = nameInput2.value;
  // nameInput2.value = "";
  currentGuess1.innerHTML = guessInput1.value;
  // guessInput1.value = "";
  currentGuess2.innerHTML = guessInput2.value;
  // guessInput2.value = "";
});
