"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
await  queryInterface.createTable("tweets", {
      // id: {
      //   type: Sequelize.INTEGER(11),
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },

      content: Sequelize.STRING(300),
      userId:Sequelize.INTEGER(11),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
await  queryInterface.dropTable("tweets");
  },
};
