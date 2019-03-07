-- Drops the GirlCode_db if it exists currently --
DROP DATABASE IF EXISTS GirlCode_db;

-- Creates the "GirlCode_db" database --
CREATE DATABASE GirlCode_db;


USE GirlCode_db;

-- Creates at table in the "GirlCode_db" database --
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT, 
  firstName: VARCHAR(30) NOT NULL,
  lastName: VARCHAR(30) NOT NULL,
  email : VARCHAR(320) NOT NULL,
  userPassword: VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


SELECT * FROM GirlCode_db;
select * from users;