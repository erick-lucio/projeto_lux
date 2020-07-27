const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");

const updateRoutes = express.Router();
const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");
/*
updateRoutes.put(
  "/images",
  DefaultController.verifyHashKey,
  UserController.updateImages
);
updateRoutes.put(
  "/users",
  DefaultController.verifyHashKey,
  UserController.updateUsers
);
///////////// profile e chat serao feitos posteriormente
updateRoutes.put(
  "/messages",
  DefaultController.verifyHashKey,
  UserController.getUser
);
*/
module.exports = updateRoutes;
