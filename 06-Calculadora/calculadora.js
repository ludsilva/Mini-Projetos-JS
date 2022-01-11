'use strict';

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=tecla]');
const operators = document.querySelectorAll('[id*=operador]');

let newNumber = true;
let operator;
let prevNumber;

const pendingOperation = () => operator !== undefined;

const calculate = () => {
  if(pendingOperation()){
    let currentNumber = parseFloat(display.textContent.replace(',','.'));
    newNumber = true;
    let result = eval (`${prevNumber}${operator}${currentNumber}`);
    refreshDisplay(result);
  }
}

const refreshDisplay = (text) => {
  if(newNumber) {
    display.textContent = text.toLocaleString('BR');
    newNumber = false;
  } else {
    display.textContent += text.toLocaleString('BR');
  }
}

const insertNumber = (event) => refreshDisplay(event.target.textContent);
numbers.forEach(number => number.addEventListener('click', insertNumber));

const selectOperator = (event) => {
  if(!newNumber){
    newNumber = true;
    operator = event.target.textContent;
    prevNumber = display.textContent;
  }
}
operators.forEach(operator => operator.addEventListener('click', selectOperator));

const enableEqual = () => {
  calculate();
  operator = undefined;
}
document.getElementById('igual').addEventListener('click', enableEqual);

const cleanDisplay = () => display.textContent = '';
document.getElementById('limparCalculo').addEventListener('click', cleanDisplay);

const removeLastNumber = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removeLastNumber);

const invertSignal = () => {
  newNumber = true
  refreshDisplay(display.textContent * -1);
}
document.getElementById('inverter').addEventListener('click', invertSignal);

const isDecimal = () => display.textContent.indexOf(',') !== -1;
const thereIsValue = () => display.textContent.length > 0;

const insertDecimal = () => {
  if (!isDecimal()){
      if (thereIsValue()){
          refreshDisplay(',');
      }else{
          refreshDisplay('0,');
      }
  }
}
document.getElementById('decimal').addEventListener('click', insertDecimal);

const keyboardMap = {
  '0'         : 'tecla0',
  '1'         : 'tecla1',
  '2'         : 'tecla2',
  '3'         : 'tecla3',
  '4'         : 'tecla4',
  '5'         : 'tecla5',
  '6'         : 'tecla6',
  '7'         : 'tecla7',
  '8'         : 'tecla8',
  '9'         : 'tecla9',
  '/'         : 'operadorDividir',
  '*'         : 'operadorMultiplicar',
  '-'         : 'operadorSubtrair',
  '+'         : 'operadorAdicionar',
  '='         : 'igual',
  'Enter'     : 'igual',
  'Backspace' : 'backspace',
  'c'         : 'limparDisplay',
  'Escape'    : 'limparCalculo',
  ','         : 'decimal'
}

const mappingKeyboard = (event) => {
  let key = event.key;
  let allowedKey = () => Object.keys(keyboardMap).indexOf(key) !== -1;
  if (allowedKey()) document.getElementById(keyboardMap[key]).click();
}
document.addEventListener('keydown', mappingKeyboard);