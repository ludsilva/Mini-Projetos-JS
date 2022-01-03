'use strict';

const drumNotes = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav'
}

const createDiv = (text) => {
  let div = document.createElement('div');
  div.classList.add('key');
  div.textContent = text;
  div.id = text;
  document.getElementById('container').appendChild(div);
}

const showNotes = (function (drumNotes) {
  Object.keys(drumNotes).map(createDiv);
})(drumNotes);

const activateDiv = (event) => {
  let word = event.type === 'click' ? event.target.id : event.key.toUpperCase();

  let isAWord = drumNotes.hasOwnProperty(word);
  if (isAWord){
    addEffect(word);
    playSound(word);
    setInterval(() => {
      removeEffect(word)
    }, 350);
  }
}

const addEffect = (word) => {
  document.getElementById(word).classList.add('active')
}

const playSound = (word) => {
  let audio = new Audio(`./sounds/${drumNotes[word]}`) 
  audio.play();
}

const removeEffect = (word) => {
  document.getElementById(word).classList.remove('active')
}

document.getElementById('container').addEventListener('click', activateDiv);

window.addEventListener('keydown', activateDiv);  