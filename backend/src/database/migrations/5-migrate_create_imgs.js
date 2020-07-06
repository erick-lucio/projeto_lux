'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('imgs', { 
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
     },
    name:{
      type:Sequelize.STRING,
      allowNull:false
     },
    description:{
      type:Sequelize.STRING,
      allowNull:false,
      defaultValue:""
     },
    hidden:{
      type:Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
     },
    path:{
      type:Sequelize.STRING,
      allowNull:false
     },
    user_id:{
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
    return queryInterface.dropTable('imgs');
  }
};
