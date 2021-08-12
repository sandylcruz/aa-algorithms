DROP TABLE IF EXISTS cat_table;
DROP TABLE IF EXISTS people;
DROP TYPE IF EXISTS color;

CREATE TYPE color AS ENUM ('tuxedo', 'tortie', 'tabby');

CREATE TABLE IF NOT EXISTS cat_table (
  cat_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age SMALLINT NOT NULL,
  color color NOT NULL,
  CONSTRAINT owner
    FOREIGN KEY(owner_id)
      REFERENCES people(id)
);

CREATE TABLE IF NOT EXISTS people (
  people_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age SMALLINT NOT NULL
);

INSERT INTO cat_table(name, age, color)
VALUES ('Callie', 18, 'tuxedo');

SELECT *
FROM cat_table;