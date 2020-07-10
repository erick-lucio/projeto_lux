const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Users = require("../models/Users");
const Chat = require("../models/Chat");
const Estado = require("../models/Estado");
const Cidade = require("../models/Cidade");
const Imgs = require("../models/Imgs");
const Img_main = require("../models/Img_main");
const Pais = require("../models/Pais");

const connection = new Sequelize(dbConfig);

Users.init(connection);
Chat.init(connection);
Estado.init(connection);
Cidade.init(connection);
Imgs.init(connection);
Img_main.init(connection);
Pais.init(connection);

/*
#########################################################
Users relations
#########################################################
*/
Users.belongsTo(Estado, {
  foreignKey: "estado_id",
});
Users.belongsTo(Cidade, {
  foreignKey: "cidade_id",
});
Users.belongsTo(Pais, {
  foreignKey: "pais_id",
});
//////////////////////////////////////////
/*
#########################################################
Cidade relations
#########################################################

Cidade.belongsTo(Estado, {
  foreignKey: "estado_id",
});
Cidade.belongsTo(Pais, {
  foreignKey: "pais_id",
});

#########################################################
Estado relations
#########################################################

Estado.belongsTo(Pais, {
  foreignKey: "pais_id",
});
///////////////////////////////

#########################################################
Chat relations
#########################################################
*/
Chat.belongsTo(Users, {
  foreignKey: "destinatario_user_id",
});
Chat.belongsTo(Users, {
  foreignKey: "remetente_user_id",
});
////////////////////////////
/*
#########################################################
ImgProfile relations
#########################################################
*/
Img_main.belongsTo(Imgs, {
  foreignKey: "img_id",
});
Img_main.belongsTo(Users, {
  foreignKey: "user_id",
});
////////////////////////////////
/*
#########################################################
Imgs relations
#########################################################
*/
Imgs.belongsTo(Users, {
  foreignKey: "user_id",
});
///////////////////////////////

module.exports = connection;
