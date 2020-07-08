const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");
const ImageController = require("../controllers/ImageController");

const getRoutes = express.Router();
const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");

function check_autentication() {
  if (true) {
    next();
  } else {
    res.status(401).send("Error Autentication");
  }
}
getRoutes.get(
  "/teste1",
  function (req, res, next) {
    //testa header
    next();
  },
  DefaultController.testeFunction
);
getRoutes.get(
  "/config",
  function (req, res, next) {
    //testa header
    next();
  },
  DefaultController.configDatabase
);
getRoutes.get(
  "/images/:id",
  function (req, res, next) {
    //testa header
    next();
  },
  ImageController.getImgById
);
getRoutes.get(
  "/userimgs",
  function (req, res, next) {
    //testa header
    next();
  },
  ImageController.getUserImgs
);
getRoutes.get(
  "/users",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.getUser
);
getRoutes.get(
  "/profile/:id",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.getUsersByQueryId
);

getRoutes.get(
  "/messages",
  function (req, res, next) {
    //testa header
    next();
  },
  ChatController.getMessageById
);
getRoutes.get(
  "/chat",
  function (req, res, next) {
    //testa header
    next();
  },
  ChatController.getMessage
);
module.exports = getRoutes;
