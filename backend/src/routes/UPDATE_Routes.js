const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");

const updateRoutes = express.Router();
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
updateRoutes.put(
  "/images",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.getUser
);
updateRoutes.put(
  "/users",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.getUser
);
updateRoutes.put(
  "/messages",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.getUser
);
module.exports = updateRoutes;
