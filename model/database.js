require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "techdel",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `
CREATE TABLE company (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  score INT, 
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE repo (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  team_name VARCHAR(100),
  technology VARCHAR(100),
  company_id INT NOT NULL,
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP
  score INT,
  FOREIGN KEY (company_id) REFERENCES company(id)
)`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

    console.log("Closing...");
  });

  con.end();
});
