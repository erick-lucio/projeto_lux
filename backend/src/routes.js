const express = require('express');
const UserController = require('./controllers/UserController');
const ChatController = require('./controllers/ChatController');
const DefaultController = require('./controllers/DefaultController');
const routes = express.Router();

function check_autentication(){  
  if(true){
    next();
  }else{
    res.status(500).send("Error Autentication")
  }
}
//REALIZA CONFIGURAÇÃO/ INSERTS INICIAIS PADROES
routes.get('/config', function (req, res, next) {
    //testa header
    next();
},DefaultController.configDatabase);
//
//RETORNA um usuario
routes.post('/userslogin', function (req, res, next) {
    //testa header 

  next();
},UserController.returnUsers);//UserController.returnAllUsers);
//
//Adicionar Usuario
routes.post('/users', function (req, res, next) {
//testa header
  next();
},UserController.createUser);


module.exports = routes;