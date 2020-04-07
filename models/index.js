var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || "development";
var db = {};

if (!global.hasOwnProperty("db")) {
  var Sequelize = require("sequelize"),
    sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_BLACK_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BLACK_URL, {
      dialect: "postgres",
      protocol: "postgres",
      logging: false
    });
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize("leaguestats_db", "root", "Passwordsucks!1", {
      host: "localhost",
      dialect: "mysql",
    });
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    diceRoll: sequelize.import(__dirname + "/diceRoll"),
    // add your other models here
  };

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db;
