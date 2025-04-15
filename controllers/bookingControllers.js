const Booking = require("../models/Booking");

//new booking
const addBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;
    if (!userId || !busId || !seatNumber) {
      return res.status(400).json({
        Error: "userId, busId and seatNumber are mandatory",
      });
    }

    const booking = await Booking.create({
      userId,
      busId,
      seatNumber,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.log("Error adding bus", err);
    return res.status(500).json({ Error: `Error adding bus ${err.message}` });
  }
};

module.exports = {
  addBooking,
};
