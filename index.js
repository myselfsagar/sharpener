const express = require("express");
const app = express();
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bus_booking_system",
});

const createTable = () => {
  try {
    dbConnection.execute(`
        create table users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(50) UNIQUE
        )`);
    dbConnection.execute(`
        create table buses (
            busId INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(30),
            totalSeats INT,
            availableSeats INT
        )`);
    dbConnection.execute(`
        create table bookings (
            bookingId INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        )`);
    dbConnection.execute(`
        create table payments (
            paymentId INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(20)
        )`);

    console.log("Tables created");
  } catch (err) {
    console.log("Error creating tables", err);
  }
};

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to db");

  createTable();
});

app.get("/", (req, res) => {
  res.send("Welcome to Bus Boooking app");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
