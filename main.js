var updateBtn = document.querySelector('.range__btn--update');
var setRangeLow = document.querySelector('#range__lower--num');
var setRangeHigh = document.querySelector('#range__higher--num');
var minRangeInput = document.querySelector('#range__input--min');
var maxRangeInput = document.querySelector('#range__input--max');



updateBtn.addEventListener('click', function(e) {
    e.preventDefault();
    setRangeLow.innerHTML = minRangeInput.value;
    minRangeInput.value = "";
    setRangeHigh.innerHTML = maxRangeInput.value;
    maxRangeInput.value = "";
});



