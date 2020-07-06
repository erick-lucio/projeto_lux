const express = require('express');
const UserController = require('../controllers/UserController');
const ChatController = require('../controllers/ChatController');
const DefaultController = require('../controllers/DefaultController');
const ProductController = require('./controllers/ProductController');
const getRoutes = express.Router();
const multer = require('multer');
const path = require('path')
const multerconfig = require('../src/config/multer');

function check_autentication(){  
    if(true){
      next();
    }else{
      res.status(500).send("Error Autentication")
    }
}

getRoutes.get('/config', function (req, res, next) {
    //testa header
    next();
},DefaultController.configDatabase);
getRoutes.get('/images/:id',function (req, res, next) {
    //testa header
    next();
},ProductController.downloadImages);
getRoutes.get('/product',function (req, res, next) {
    //testa header
    next();
},ProductController.getProduct);
getRoutes.get('/productimg',function (req, res, next) {
    //testa header
    next();
},ProductController.getProductImgs);
  
getRoutes.get('/productimgall',function (req, res, next) {
    //testa header
    next();
},ProductController.getProductImgsAll);

module.exports = getRoutes;