CREATE DATABASE IF NOT EXISTS HackReactor_RFP2302_Databases;

USE HackReactor_RFP2302_Databases;
GO

CREATE TABLE moviesTables (
  movieID INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  watched BOOLEAN
);

ALTER TABLE moviesTables ADD FULLTEXT (title);

INSERT INTO moviesTables (title, watched)
VALUES
  ('Mean Girls', 0),
  ('Hackers', 0),
  ('The Grey', 0),
  ('Sunshine', 0),
  ('Terminator', 0),
  ('Citizen Kane', 0),
  ('Back to the Future', 0),
  ('Ponyo', 0),
  ('Ex Machina', 0);

