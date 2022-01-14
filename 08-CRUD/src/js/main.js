'use strict';

const getDbClients = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setDbClients = (dbClients) => localStorage.setItem("db_client",JSON.stringify(dbClients));

// CRUD

 const createClient = (client) => {
  //ler oq tem no bd e transformar em json e enviar para a var clients
  let dbClients = getDbClients();
  dbClients.push(client);

  //enviar dados para localstorage a partir de um array / key-value
  setDbClients(dbClients);
}

//Read
const readClient = () => getDbClients();

//Update
const updateClient = (index, client) => {
  let dbClient = readClient();
  dbClient[index] = client;

  setDbClients(dbClient);
}

//Delete
const deleteClient = (index) => {
  let dbClient = readClient();
  dbClient.splice(index, 1);

  setDbClients(dbClient);
}