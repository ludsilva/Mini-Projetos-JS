'use strict';

const formatDigit = (digit) => `0${digit}`.slice(-2);

const updateTime = (time) => {
  const seconds = document.getElementById('segundos');
  const minutes = document.getElementById('minutos');
  const hours = document.getElementById('horas');
  const days = document.getElementById('dias');


  const qtdSeconds = time % 60;
  const qtdMinutes = Math.floor((time % (60 * 60)) / 60);
  const qtdHours =  Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const qtdDays = Math.floor(time / (60 * 60 * 24));

  
  seconds.textContent = formatDigit(qtdSeconds);
  minutes.textContent = formatDigit(qtdMinutes);
  hours.textContent = formatDigit(qtdHours);
  days.textContent = (qtdDays);
}

const countdown = (time) => {
  const stopCounting = () => {
    clearInterval(idCount)
  }

  const count = () => {
    if (time === 0){
      stopCounting();
    }
    updateTime(time);
    time--;
  }
  
  const idCount = setInterval(count, 1000);
}

const timeLeft = () => {
  const eventDate = new Date ('2023-01-01 00:00:00');
  const today = Date.now();
  console.log(today)

  return Math.floor((eventDate - today) / 1000);
}

countdown(timeLeft());