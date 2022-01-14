'use strict';

//Table 
const createRow = (client, index) => {
  let newRow = document.createElement('tr')
    newRow.innerHTML = `
      <td>${client.nome}</td>
      <td>${client.email}</td>
      <td>${client.celular}</td>
      <td>${client.cidade}</td>
      <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}">Deletar</button>
      </td>
    `
  document.querySelector('#tableClient>tbody').appendChild(newRow);
}

const clearTable = () => {
  let rows = document.querySelectorAll('#tableClient>tbody tr')
    .forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};
updateTable();

const fillFields = (client) => {
  document.getElementById('name').value = client.nome;
  document.getElementById('email').value = client.email;
  document.getElementById('cellphone').value = client.celular;
  document.getElementById('city').value = client.cidade;
  document.getElementById('name').dataset.index = client.index;
}

const editClient = (index) => {
  let client = readClient()[index];
  client.index = index;
  fillFields(client);
  openModal();
}

const editOrDelete = (event) => {
  if(event.target.type === 'button'){
    const [action, index] = event.target.id.split('-')
    
    if(action == 'edit'){
      editClient(index);
    } else {
      let client = readClient()[index]
      let answer = confirm(`Deseja realmente excluir o cliente ${client.nome}`);
      if(answer){
        deleteClient(index);
        updateTable();
      }
      
      
    }
  }
}

//Layout Modal
const clearFiels = () => {
  let fields = document.querySelectorAll('.modal-field')
    .forEach(field => field.value = '');
}

const saveClient = () => {
  if(isValidFields()){
    const client = {
      nome: document.getElementById('name').value,
      email: document.getElementById('email').value,
      celular: document.getElementById('cellphone').value,
      cidade: document.getElementById('city').value,
    }

    let index = document.getElementById('name').dataset.index;
    if(index == 'new'){
      createClient(client);
      closeModal();
      updateTable();
    } else {
      updateClient(index, client);
      updateTable();
      closeModal();
    }
  }
}

//Events
document.getElementById('salvar').addEventListener('click', saveClient);

document.querySelector('#tableClient>tbody').addEventListener('click', editOrDelete);