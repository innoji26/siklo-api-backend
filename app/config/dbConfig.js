require("dotenv").config();
const config = {
    host: process.env.HOST,
    user: process.env.USER,
    pass: process.env.PASS,
    db: "siklo",
    dialect: "mysql",
};

module.exports = config;