const Sequelize = require("sequelize");
const jwt = require("json-web-token")
const sequelize = new Sequelize("socialnetwork", "root", "123456789", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;
global.exports = sequelize;
