const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");

const postRoutes = express.Router();
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

postRoutes.post(
  "/images",
  function (req, res, next) {
    //testa header

    next();
  },
  UserController.createUser
); //UserController.returnAllUsers);
postRoutes.post(
  "/users",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.createUser
);
postRoutes.post(
  "/images",
  multer(multerconfig).single("file"),
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.createUser
);
postRoutes.post(
  "/messages",
  function (req, res, next) {
    //testa header
    next();
  },
  UserController.createUser
);

module.exports = postRoutes;
