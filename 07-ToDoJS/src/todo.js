'use strict';

const getDatabase = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
//atualiza o database
const setDatabase = (database) => localStorage.setItem('todoList', JSON.stringify(database));


//cria o item do todo - DOM
const createItem = (task, status, index) =>{
  //Criar um label com uma classe
  const item = document.createElement('div');
  item.classList.add('todo_item');
  //criar o elemento html
  item.innerHTML = `
    <input type="checkbox" ${status} data-index=${index}>
    <div id='text_item'>${task}</div>
    <input type="button" value="X" data-index=${index}>
  `
  document.getElementById('todoList').appendChild(item);
}

//limpar as tarefas 
const clearTasks = () =>{
  const todoList = document.getElementById('todoList');
  while(todoList.firstChild){
    todoList.removeChild(todoList.lastChild);
  }
}

//ler o banco e criar os itens
const renderScreen = () =>{
  clearTasks();
  let database = getDatabase();
  database.filter((item, index) => createItem(item.tarefa, item.status, index))
};

//Inserindo item
document.getElementById('newItem').addEventListener('keypress', (event)=>{
  const keyPressed = event.key;
  const text = event.target.value;
  if(keyPressed == 'Enter'){
    let database = getDatabase();
    database.push({'tarefa': text, 'status': ''});
    setDatabase(database);
    renderScreen();
    event.target.value = '';
  }
})

//clicar no x para remover o item da lista
document.getElementById('todoList').addEventListener('click', (event)=>{
  const element = event.target;
  let index = element.dataset.index;
  if(element.type === 'button'){
    removeItem(index);
  } else if (element.type ===  'checkbox'){
    updateItem(index)
  }
})

const updateItem = (index) =>{
  let database = getDatabase();
  database[index].status = database[index].status === '' ? 'checked' : '';
}

const removeItem = (index) =>{
  let database = getDatabase();
  database.splice(index, 1);
  setDatabase(database);
  renderScreen();
}

renderScreen();