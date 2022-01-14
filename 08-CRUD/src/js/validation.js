'use strict';

//Input validation
const validInputText = (event) => {
  if(event.key >= '0' && event.key <= '9'){
    event.preventDefault();
  }
}

const validInputNumber = (event) => {
  if(event.key >= 'a' && event.key <= 'z'){
    event.preventDefault();
  }
}

const isValidFields = () => {
  return document.getElementById('form').reportValidity();
}

//Events
const validText = Array.prototype.slice.call(document.querySelectorAll('.modal-text'))
  .filter(element => element.addEventListener('keypress', validInputText));

document.getElementById('cellphone').addEventListener('keypress', validInputNumber);