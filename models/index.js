var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || "development";
var db = {};

if (!global.hasOwnProperty("models")) {
  var sequelize;
  var Sequelize = require("sequelize");

  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres         database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
      dialect: "postgres",
      protocol: "postgres",
      port: 5432,
      host: "<heroku host>",
      logging: true, //false
    });
  } else {
    // the application is executed on the local machine ... use mysql
    const sequelize = new Sequelize("database", "username", "password", {
      host: "localhost",
      dialect: "mysql",
    });
  }
  global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    diceRoll: sequelize.import(__dirname + "/diceRoll"),
    // add your other models here
  };
}
module.exports = global.models;
