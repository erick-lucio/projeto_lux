const express = require("express");
const UserController = require("../controllers/UserController");
const ChatController = require("../controllers/ChatController");
const DefaultController = require("../controllers/DefaultController");

const deleteRoutes = express.Router();
const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");

deleteRoutes.delete(
  "/images",
  DefaultController.verifyHashKey,
  UserController.getUser
);
deleteRoutes.delete(
  "/users",
  DefaultController.verifyHashKey,
  UserController.getUser
);
deleteRoutes.delete(
  "/messages",
  DefaultController.verifyHashKey,
  UserController.getUser
);
module.exports = deleteRoutes;
