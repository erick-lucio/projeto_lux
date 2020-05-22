const express = require('express');
const UserController = require('./controllers/UserController');
const ChatController = require('./controllers/ChatController');
const DefaultController = require('./controllers/DefaultController');
const routes = express.Router();

routes.get('/', DefaultController.defaultFunction);

routes.get('/alluser', UserController.returnAllUsers);
routes.post('/cruser', UserController.createUser);
routes.get('/sruser/:valuePassword/:valueEmail', UserController.searchUser);

routes.get('/sr100chats', ChatController.searchLast100Messages);
routes.post('/inschat', ChatController.insertChatMessage);



module.exports = routes;