const { Sequelize } = require("sequelize");

<<<<<<< HEAD
//create connection
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bus_booking_system",
});

//create table
const createTable = () => {
  try {
    dbConnection.execute(`
      create table IF NOT EXISTS users(
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(50),
          email VARCHAR(50) UNIQUE
      )`);
    dbConnection.execute(`
      create table IF NOT EXISTS buses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          busNumber VARCHAR(30),
          totalSeats INT,
          availableSeats INT
      )`);
    dbConnection.execute(`
      create table IF NOT EXISTS bookings (
          id INT AUTO_INCREMENT PRIMARY KEY,
          seatNumber INT
      )`);
    dbConnection.execute(`
      create table IF NOT EXISTS payments (
          id INT AUTO_INCREMENT PRIMARY KEY,
          amountPaid INT,
          paymentStatus VARCHAR(20)
      )`);

    console.log("Tables created");
  } catch (err) {
    console.log("Error creating table", err);
    return;
  }
};

dbConnection.connect((err) => {
  if (err) {
    console.log("Error connecting db", err);
    return;
=======
const sequelize = new Sequelize("student_app", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to db has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
>>>>>>> my-new-branch
  }
})();

<<<<<<< HEAD
  createTable();
});

module.exports = dbConnection;
=======
module.exports = sequelize;
>>>>>>> my-new-branch
