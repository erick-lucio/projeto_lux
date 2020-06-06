const express = require('express');
const UserController = require('./controllers/UserController');
const ChatController = require('./controllers/ChatController');
const DefaultController = require('./controllers/DefaultController');
const routes = express.Router();

  //REALIZA CONFIGURAÇÃO/ INSERTS INICIAIS PADROES
  routes.get('/config', function (req, res, next) {
      //testa header
      next();
  },DefaultController.configDatabase);
  //
  //RETORNA TODOS OS USUARIOS
  routes.get('/users', function (req, res, next) {
      //testa header 

    next();
  },UserController.returnUsers);//UserController.returnAllUsers);
  //
  //Adicionar Usuario
  routes.post('/users', function (req, res, next) {
 //testa header
    next();
  },UserController.createUser);
//routes.get('/alluser', UserController.returnAllUsers);
//routes.post('/cruser', UserController.createUser);
//routes.get('/sruser/:valuePassword/:valueEmail', UserController.searchUser);

//routes.get('/sr100chats', ChatController.searchLast100Messages);
//routes.post('/inschat', ChatController.insertChatMessage);



module.exports = routes;