const { Model, DataTypes } = require("sequelize");

class AuthSession extends Model {
  static init(sequelize) {
    super.init(
      {
        key: DataTypes.STRING,
        user_id: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "auth_session",
        freezeTableName: true,
      }
    );
  }
}

module.exports = AuthSession;
