'use strict';

const tsMin = document.querySelector('.js__user-ts');
const userMin = document.querySelector('.js__fake-field');
const resultHHMM = document.querySelector('.js__result-hhmm');
const resultDecimal = document.querySelector('.js__result-decimal');

function getTS(ts) {
  const hours = Math.floor(ts / 60);  
  const minutes = ts % 60;
  resultHHMM.innerHTML = `${hours}h ${minutes}min`; 
}
function getDecimalTS(ts) {
  const hours = Math.floor(ts / 60);  
  const minutes = ts % 60;
  const decimal = hours + minutes/60;
  resultDecimal.innerHTML = `${decimal.toFixed(2)}h`;
}

userMin.addEventListener('keyup', event => {
  const userMinutes = event.currentTarget.innerHTML;
  tsMin.value = userMinutes.replace(/\D/g,'');;

  const fakeEvent = new CustomEvent('change');
  tsMin.dispatchEvent(fakeEvent);
});

tsMin.addEventListener('change', event => {
  const userMinutes = event.currentTarget.value;
  getTS(userMinutes);
  getDecimalTS(userMinutes);
});