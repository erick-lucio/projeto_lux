const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");
const ImageController = require("../controllers/ImageController");

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
  "/users",
  DefaultController.verifyFrontKey,
  UserController.createUser
);
postRoutes.post(
  "/images",
  DefaultController.verifyHashKey,
  multer(multerconfig).single("file"),
  ImageController.uploadImage
);
postRoutes.post(
  "/getusers",
  DefaultController.verifyFrontKey,
  UserController.getUser
);
///////////// profile e chat serao feitos posteriormente
postRoutes.post(
  "/messages",
  DefaultController.verifyHashKey,
  UserController.createUser
);

module.exports = postRoutes;
