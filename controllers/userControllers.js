const User = require("../models/User");
const { Booking, Bus } = require("../models");

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ Error: "Name and email are mandatory" });
    }
    const user = await User.create({
      name: name,
      email: email,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log("Error creating user", err);
    return res
      .status(500)
      .json({ Error: `Error creating user ${err.message}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (err) {
    console.log("Error fetching users", err);
    return res
      .status(500)
      .json({ Error: `Error fetching users ${err.message}` });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const userId = req.params.id;
    const userBookings = await Booking.findAll({
      where: { userId },
      include: Bus,
      // include: [{ model: Bus }],
    });
    res.json(userBookings);
  } catch (err) {
    console.log("Error fetching user bookings", err);
    return res
      .status(500)
      .json({ Error: `Error fetching bookings ${err.message}` });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUserBookings,
};
