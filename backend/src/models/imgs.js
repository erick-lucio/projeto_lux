const { Model, DataTypes } = require('sequelize');

class Imgs extends Model {
  static init(sequelize) {
    super.init({
      message_content:DataTypes.STRING,
      user_id:DataTypes.INTEGER,
      from_user:DataTypes.STRING,
      to_user:DataTypes.STRING,
      }, {
      sequelize,
      modelName: 'imgs',
      freezeTableName: true,
    })
    
  }


}

module.exports =  Imgs;