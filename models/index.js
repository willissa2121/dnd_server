if (!global.hasOwnProperty("db")) {
  var Sequelize = require("sequelize"),
    sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_BLUE_URL) {
    console.log('hitting correct')
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BLUE_URL, {
      dialect: "postgres",
      protocol: "postgres",
      // port: match[4],
      // host: match[3],
      logging: false, //false
    });
    
  } else {
    console.log('hitting false')
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
