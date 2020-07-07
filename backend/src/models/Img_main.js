const { Model, DataTypes } = require("sequelize");

class Img_main extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.STRING,
        img_id: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "img_main",
        freezeTableName: true,
      }
    );
  }
}

module.exports = Img_main;
