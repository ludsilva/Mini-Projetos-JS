const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
}

//obj literal with functions
const turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => intervalID = setInterval(changeColor, 1000),
}

const changeColor = () =>{
  const colors = ['green', 'yellow', 'red'];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex()
}

const nextIndex = () => colorIndex < 2 ? colorIndex++ : colorIndex = 0;

const stopAutomatic = () => {
  clearInterval(intervalID);
}

buttons.addEventListener('click', trafficLight);