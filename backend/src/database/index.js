const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuarios = require('../models/Users');
const Chat = require('../models/Chat');
const Estado = require('../models/Estado');
const Cidade = require('../models/Cidade');


const connection = new Sequelize(dbConfig);

Usuarios.init(connection);
Chat.init(connection);
Estado.init(connection);
Cidade.init(connection);


Usuarios.belongsTo(Estado,{
    foreignKey:'estado_id'
});
Usuarios.belongsTo(Cidade,{
    foreignKey:'cidade_id'
});
//
Cidade.belongsTo(Estado,{
    foreignKey:'estado_id'
});
//
Chat.belongsTo(Usuarios,{
    foreignKey:'to_user'
});
Chat.belongsTo(Usuarios,{
    foreignKey:'from_user'
});



module.exports = connection;