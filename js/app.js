'use strict';

const tsMin = document.querySelector('.js__user-ts');
const userMin = document.querySelector('.js__fake-field');
const resultHHMM = document.querySelector('.js__result-hhmm');
const resultDecimal = document.querySelector('.js__result-decimal');

function getTS(ts) {
  const hours = Math.floor(ts / 60);  
  const minutes = ts % 60;
  return {hours, minutes};
}

function getDecimalTS(ts) {
  const hours = Math.floor(ts / 60);  
  const minutes = ts % 60;
  return hours + minutes/60;
}

function writeTime(el,content) {
  el.innerHTML = content;
}

userMin.addEventListener('keyup', event => {
  const userMinutes = event.currentTarget.innerHTML;
  tsMin.value = userMinutes.replace(/\D/g,'');

  const fakeEvent = new CustomEvent('change');
  tsMin.dispatchEvent(fakeEvent);
});

tsMin.addEventListener('change', event => {
  const userMinutes = event.currentTarget.value;
  const {hours, minutes} = getTS(userMinutes);
  const decimal = getDecimalTS(userMinutes);

  writeTime(resultHHMM, `${hours}<span classs="unit">h</span> ${minutes}<span classs="unit">min</span>`);
  writeTime(resultDecimal, `${decimal.toFixed(2)}<span classs="unit">h</span>`);
});