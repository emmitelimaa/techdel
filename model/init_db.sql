DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
  company_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(100),
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS repos;

CREATE TABLE repos (
  repo_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  repo_name VARCHAR(100),
  team_name VARCHAR(100),
  technology VARCHAR(100),
  company_id INT NOT NULL,
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
)