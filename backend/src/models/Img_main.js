const { Model, DataTypes } = require('sequelize');

class Img_main extends Model {
  static init(sequelize) {
    super.init({
      message_content:DataTypes.STRING,
      user_id:DataTypes.INTEGER,
      from_user:DataTypes.STRING,
      to_user:DataTypes.STRING,
      }, {
      sequelize,
      modelName: 'img_main',
      freezeTableName: true,
    })
    
  }


}

module.exports =  Img_main;