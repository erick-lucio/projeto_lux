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
    password:{
      type:Sequelize.STRING,
      allowNull:false
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false
    },
    logged:{
      type:Sequelize.BOOLEAN,
      allowNull:false
    },
    rua:{
      type:Sequelize.STRING,
      allowNull:false,
      defaultValue:""
    },
    sobre:{
      type:Sequelize.STRING,
      allowNull:false,
      defaultValue:""
    },
    permissao:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
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
