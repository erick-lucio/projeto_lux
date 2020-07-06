'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
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
    rua:{
      type:Sequelize.STRING,
      allowNull:false
    },
    sobre:{
      type:Sequelize.STRING,
      allowNull:false
    },
    permissao:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    idade:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    estado_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'estado', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    cidade_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'cidade', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    pais_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: { model: 'pais', key: 'id' },
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
    return queryInterface.dropTable('users');
  }
};
