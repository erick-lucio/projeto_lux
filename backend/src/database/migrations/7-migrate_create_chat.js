'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chat', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
     },
    message:{
      type:Sequelize.STRING,
      allowNull:false
     },
    hidden:{
      type:Sequelize.BOOLEAN,
      allowNull:false
     },
    destinatario_user_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
    remetente_user_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
    createdAt:{
      type:Sequelize.DATE,
      allowNull:false,
      defaultValue:Sequelize.fn('now')     
      },
    updatedAt:{
      type:Sequelize.DATE,
      allowNull:false,
      defaultValue:Sequelize.fn('now')
    }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chat');
  }
};
