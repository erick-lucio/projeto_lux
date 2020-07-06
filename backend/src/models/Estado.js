const { Model, DataTypes } = require('sequelize');

class Estado extends Model {
  static init(sequelize) {
    super.init({
      name:DataTypes.STRING,
      sigla:DataTypes.STRING,
      pais_id:DataTypes.INTEGER,   
    }, {
      sequelize,
      modelName: 'estado',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Estado;