require("dotenv").config();
const config = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    pass: process.env.MYSQLPASSWORD,
    db: process.env.MYSQLDATABASE,
    dialect: "mysql",
};

module.exports = config;
