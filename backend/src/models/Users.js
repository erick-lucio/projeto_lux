const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      password:DataTypes.STRING,
      email:DataTypes.STRING,
      rua:DataTypes.STRING,
      sobre:DataTypes.STRING,
      permissao:DataTypes.INTEGER,
      idade:DataTypes.INTEGER,
      logged:DataTypes.BOOLEAN,      
      cidade_id:DataTypes.INTEGER,
      estado_id:DataTypes.INTEGER,
      paid_id:DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'users',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Users;