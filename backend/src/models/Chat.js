const { Model, DataTypes } = require("sequelize");

class Chat extends Model {
  static init(sequelize) {
    super.init(
      {
        message: DataTypes.STRING,
        hidden: DataTypes.BOOLEAN,
        destinatario_user_id: DataTypes.INTEGER,
        remetente_user_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "chat",
        freezeTableName: true,
      }
    );
  }
}

module.exports = Chat;
