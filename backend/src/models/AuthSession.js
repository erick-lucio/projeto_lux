const { Model, DataTypes } = require("sequelize");

class AuthSession extends Model {
  static init(sequelize) {
    super.init(
      {
        auth_key: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        updatedAt: DataTypes.DATE,
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
