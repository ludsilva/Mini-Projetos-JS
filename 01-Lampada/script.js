  const turnOn = document.getElementById('btnOnOff');
  const lamp = document.getElementById('lamp'); 
  const reload = document.getElementById('reload');

  const isLampBroken = () => {
    return lamp.src.indexOf('quebrada') > -1 // true
  }

  const isLampOff = () => {
    return lamp.src.indexOf('desligada') > -1;
  }

  const lampOn = () => {
    if(!isLampBroken()){
      lamp.src = './img/ligada.jpg';
      changeTitle();
      turnOn.textContent = `Desligar`;
    }
  }

  const lampOff = () => {
    if(!isLampBroken()){
      lamp.src = './img/desligada.jpg';
      changeTitle();
      turnOn.textContent = `Ligar`;
    }
  }

  const lampBroken = () => { 
    lamp.src = './img/quebrada.jpg';
    displayMessage();
  }

  const reloadPage = () => {
    location.reload();
  }

  const clickButtonLamp = () => {
    if(isLampOff()){
      turnOn.textContent = `Desligar`;
      lampOn();
    } else {
      lampOff();
      turnOn.textContent = `Ligar`;
    }
  }

  const displayMessage = () => {
    let message = document.getElementById('message');
    message.style.display = 'block';
    message.textContent = `Oh no! A lâmpada quebrou! \nRecarregue a página.`;
    unsetMessage();
  }

  const unsetMessage = () => {setTimeout(clearMessage, 5000);}

  const clearMessage = () => {
    let message = document.getElementById('message');
    message.style.display = 'none';
  }

  const changeTitle = () => {
    let title = document.getElementById('mainTitle')
    isLampOff() !== true ? title.textContent = `Apague a Lâmpada` :  title.textContent = `Acenda a Lâmpada`;
  }
  
  turnOn.addEventListener('click', clickButtonLamp);
  lamp.addEventListener('mouseover', lampOn);
  lamp.addEventListener('mouseleave', lampOff);
  lamp.addEventListener('dblclick', lampBroken);
  reload.addEventListener('click', reloadPage);