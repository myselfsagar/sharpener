const dbConnection = require("../utils/db-connection");

//add bus
const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const addBusQuery =
    "INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)";
  dbConnection.execute(
    addBusQuery,
    [busNumber, totalSeats, availableSeats],
    (err, result) => {
      if (err) {
        console.log("Error adding bus", err);
        dbConnection.end();
        return res
          .status(500)
          .json({ Error: `Error adding bus ${err.message}` });
      }
      res.json({ message: "Bus added successfully" });
    }
  );
};

const getAllBuses = (req, res) => {
  const getBusQuery = "SELECT * FROM buses";
  dbConnection.execute(getBusQuery, (err, result) => {
    if (err) {
      console.log("Error fetching buses", err);
      dbConnection.end();
      return res
        .status(500)
        .json({ Error: `Error fetching buses ${err.message}` });
    }
    res.json(result);
  });
};

const getBusesByAvailableSeats = (req, res) => {
  const availableSeats = parseInt(req.params.seats, 10);

  if (isNaN(availableSeats)) {
    return res
      .status(400)
      .json({ Error: "Invalid seat number. Must be a number." });
  }

  const getBusQuery = `SELECT * FROM buses WHERE availableSeats > ?`;
  dbConnection.execute(getBusQuery, [availableSeats], (err, result) => {
    if (err) {
      console.log("Error fetching buses by available seats", err);
      dbConnection.end();
      return res.status(500).json({
        Error: `Error fetching buses by available seats: ${err.message}`,
      });
    }
    res.json(result);
  });
};

module.exports = {
  addBus,
  getAllBuses,
  getBusesByAvailableSeats,
};
