"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
await queryInterface.createTable("users", {
      // id: {
      //   type: Sequelize.INTEGER(11),
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },    

    username: {
    type:Sequelize.STRING(35),
    allowNull:0,
    unique: 1
    },
    passwd:{
        type:Sequelize.STRING(20),
        allowNull:false

    },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
await  queryInterface.dropTable("users");
  },
};
