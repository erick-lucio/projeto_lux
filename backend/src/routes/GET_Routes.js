const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");
const ImageController = require("../controllers/ImageController");

const getRoutes = express.Router();
const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");

getRoutes.get(
  "/teste1",
  DefaultController.verifyHashKey,
  DefaultController.testeFunction
);
getRoutes.get(
  "/config",
  DefaultController.verifyFrontKey,
  DefaultController.configDatabase
);
getRoutes.get(
  "/images/:id",
  DefaultController.verifyHashKey,
  ImageController.getImgById
);
getRoutes.get(
  "/userimgs",
  DefaultController.verifyHashKey,
  ImageController.getUserImgs
);
getRoutes.get(
  "/mainimg",
  DefaultController.verifyHashKey,
  ImageController.getMainImg
);

///////////// profile e chat serao feitos posteriormente
getRoutes.get(
  "/profile/:id",
  DefaultController.verifyHashKey,
  UserController.getUsersByQueryId
);

getRoutes.get(
  "/messages",
  DefaultController.verifyHashKey,
  ChatController.getMessageById
);
getRoutes.get(
  "/chat",
  DefaultController.verifyHashKey,
  ChatController.getMessage
);
module.exports = getRoutes;
