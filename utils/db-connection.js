const mysql = require("mysql2");

//make the connection to db
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "student_app",
});

dbConnection.connect((err) => {
  if (err) {
    console.log("Error connecting db", err);
    return;
  }
  console.log("Connected to db");

  const createTableQuery = `CREATE TABLE IF NOT EXISTS students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE
  )`;
  dbConnection.execute(createTableQuery, (err) => {
    if (err) {
      console.log("Error creating table", err);
      dbConnection.end();
      return;
    }
  });

  console.log("Table created");
});

module.exports = dbConnection;
