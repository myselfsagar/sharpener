const express = require("express");
const app = express();
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "product",
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to db");

  const createTableQuery = `create table testProduct (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
  )`;

  dbConnection.execute(createTableQuery, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Table created");
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});
