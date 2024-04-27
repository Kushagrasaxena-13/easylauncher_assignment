const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  logging: false,
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
});

sequelize.sync()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch(error => {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  });

module.exports = sequelize;
