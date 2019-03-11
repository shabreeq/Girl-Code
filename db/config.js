require("dotenv").config();

module.exports= {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "WhoDat_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
