const Sequelize = require("sequelize");
const config = require("./dbConfig.js");

const database = new Sequelize(config.db, config.user, config.pass, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = database;

module.exports = db;
