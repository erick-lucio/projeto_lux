const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");

const getRoutes = express.Router();
const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");

function check_autentication() {
  if (true) {
    next();
  } else {
    res.status(500).send("Error Autentication");
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
  DefaultController.configDatabase
);
getRoutes.get(
  "/product",
  function (req, res, next) {
    //testa header
    next();
  },
  DefaultController.configDatabase
);
getRoutes.get(
  "/productimg",
  function (req, res, next) {
    //testa header
    next();
  },
  DefaultController.configDatabase
);

getRoutes.get(
  "/productimgall",
  function (req, res, next) {
    //testa header
    next();
  },
  DefaultController.configDatabase
);

module.exports = getRoutes;
