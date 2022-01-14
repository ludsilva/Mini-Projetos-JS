'use strict';

//Modal

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => {
  document.getElementById('modal').classList.remove('active');
  clearFiels();
}

//Events
document.getElementById('cadastrarCliente').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('cancelar').addEventListener('click', closeModal);