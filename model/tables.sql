CREATE TABLE company (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  score INT
);

CREATE TABLE repos (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  team_name VARCHAR(100),
  technology VARCHAR(100),
  company_id INT NOT NULL,
  score INT,
  FOREIGN KEY (company_id) REFERENCES company(id)
)

INSERT INTO company (name, score) 
VALUES
    ('Microsoft', null);
​
INSERT INTO repo (name, team_name, technology, company_id, score) 
VALUES
    ('Repro Name 1', 'Test Team Name 1', 'Python', '1', 100),
    ('Repro Name 2', 'Test Team Name 2', 'Javascript', '2', 100),
    ('Repro Name 3', 'Test Team Name 3', 'Ruby', '2', 100);
​
SELECT *
FROM company
JOIN repo
ON company.id=repo.company_id

ALTER TABLE repo RENAME COLUMN score TO repo_score;

ALTER TABLE repo
ADD created_date datetime DEFAULT CURRENT_TIMESTAMP,
ADD modifed_date datetime DEFAULT CURRENT_TIMESTAMP





