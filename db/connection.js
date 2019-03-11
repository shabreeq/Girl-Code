var mysql = require("mysql");
require("dotenv").config();

var connection;



if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "GirlCode_DB"
  });
}

module.exports = connection;