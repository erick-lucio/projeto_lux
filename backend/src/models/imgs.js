const { Model, DataTypes } = require('sequelize');

class Imgs extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      description:DataTypes.INTEGER,
      hidden:DataTypes.BOOLEAN,
      path:DataTypes.STRING,
      user_id:DataTypes.INTEGER,
      
      }, {
      sequelize,
      modelName: 'imgs',
      freezeTableName: true,
    })
    
  }


}

module.exports =  Imgs;