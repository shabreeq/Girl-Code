DROP DATABASE IF EXISTS GirlCode_DB;
CREATE database GirlCode_DB;

USE GirlCode_DB;

CREATE TABLE user_info (
  id INT NOT NULL,
  firstname VARCHAR(100) NULL,
  lastname VARCHAR(100) NULL,
  email VARCHAR(320) NULL,
  PRIMARY KEY (id)
);

