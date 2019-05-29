DROP DATABASE IF EXISTS paws

CREATE DATABASE paws;

USE paws;

DROP TABLE IF EXISTS sessions;
        
CREATE TABLE sessions (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  hash VARCHAR(255) NULL DEFAULT NULL,
  user_id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY id
) COMMENT 'Sessions for logged in users';

DROP TABLE IF EXISTS users;
        
CREATE TABLE Users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  name VARCHAR(255) NULL DEFAULT NULL,
  password VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY id
) COMMENT 'Tables for user info';

DROP TABLE IF EXISTS pets;
        
CREATE TABLE Pets (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  name VARCHAR(255) NULL DEFAULT NULL,
  image VARCHAR(255) NULL DEFAULT NULL,
  full_size VARCHAR(255) NULL DEFAULT NULL,
  user_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY id
) COMMENT 'pet infomation';

DROP TABLE IF EXISTS comments;
        
CREATE TABLE comments (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  message VARCHAR(255) NULL DEFAULT NULL,
  user_id INTEGER NULL DEFAULT NULL,
  date TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY id
) COMMENT 'For saving comments on where pets are at';


-- ---
-- Foreign Keys 
-- ---
ALTER TABLE sessions ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE pets ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE comments ADD FOREIGN KEY (user_id) REFERENCES users (id);

--Tables should be able to be created with just a single command line, i have however yet to find that command line--