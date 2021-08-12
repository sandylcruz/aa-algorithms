CREATE TABLE cats (
  id serial,
  age varchar(100) NOT NULL,
  name varchar(100) NOT NULL,
  owner varchar(100) NOT NULL,
  rating varchar(100),
  PRIMARY KEY (id),
);

-- CREATE TABLE people (
--   id serial,
--   name varchar(100),
--   cat_id varchar(100),
--   PRIMARY KEY (id),
--   FOREIGN KEY (cat_id)
--     REFERENCES cats(id)
--     ON DELETE CASCADE
-- );

INSERT INTO cats
  (id, age, name, owner, rating)
  VALUES
      (1, 'Callie', '18',
          'Louis',
          '4'),
      (2, 'Squeaky', '4',
          'Louis',
          '857300923713'),
      (3, 'Linus', '1',
          'Louis',
          '3');

-- INSERT INTO people
--   (id, name, cat_id)
--   VALUES
--       (1, 'Louis', 1),
--       (2, 'Nandy', 2),
--       (3, 'Callie', 3);

SELECT *
FROM cats

-- DROP TABLE cats
-- DROP TABLE people