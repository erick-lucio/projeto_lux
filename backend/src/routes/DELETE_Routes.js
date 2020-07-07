const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");

const deleteRoutes = express.Router();
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
postRoutes.delete(
  "/images",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.returnUsers
);
postRoutes.delete(
  "/users",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.returnUsers
);
postRoutes.delete(
  "/messages",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.returnUsers
);
module.exports = deleteRoutes;
