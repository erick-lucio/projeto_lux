const { Model, DataTypes } = require('sequelize');

class Pais extends Model {
  static init(sequelize) {
    super.init({
      message_content:DataTypes.STRING,
      user_id:DataTypes.INTEGER,
      from_user:DataTypes.STRING,
      to_user:DataTypes.STRING,
      }, {
      sequelize,
      modelName: 'pais',
      freezeTableName: true,
    })
    
  }


}

module.exports =  Pais;