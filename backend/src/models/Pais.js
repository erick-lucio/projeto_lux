const { Model, DataTypes } = require("sequelize");

class Pais extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        sigla: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "pais",
        freezeTableName: true,
      }
    );
  }
}

module.exports = Pais;
