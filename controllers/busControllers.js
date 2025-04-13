const { Op } = require("sequelize");
const Bus = require("../models/Bus");

//add bus
const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    if (!busNumber || !totalSeats || !availableSeats) {
      return res.status(400).json({
        Error: "busNumber, totalSeats and availableSeats all are mandatory",
      });
    }

    const bus = await Bus.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: availableSeats,
    });

    res.status(201).json({ message: "Bus added successfully" });
  } catch (err) {
    console.log("Error adding bus", err);
    return res.status(500).json({ Error: `Error adding bus ${err.message}` });
  }
};

const getAllBuses = async (req, res) => {
  try {
    const allBuses = await Bus.findAll();
    res.json(allBuses);
  } catch (err) {
    console.log("Error fetching buses", err);
    return res
      .status(500)
      .json({ Error: `Error fetching buses ${err.message}` });
  }
};

const getBusesByAvailableSeats = async (req, res) => {
  try {
    const requiredAvailableSeats = parseInt(req.params.seats, 10);
    if (isNaN(requiredAvailableSeats)) {
      return res
        .status(400)
        .json({ Error: "Invalid seat number. Must be a number." });
    }

    const allBusesByAvailableSeats = await Bus.findAll({
      where: {
        availableSeats: {
          [Op.gt]: requiredAvailableSeats,
        },
      },
    });

    res.json(allBusesByAvailableSeats);
  } catch (err) {
    console.log("Error fetching buses by available seats", err);
    return res.status(500).json({
      Error: `Error fetching buses by available seats: ${err.message}`,
    });
  }
};

module.exports = {
  addBus,
  getAllBuses,
  getBusesByAvailableSeats,
};
