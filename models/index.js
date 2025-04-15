const User = require("./User");
const Bus = require("./Bus");
const Booking = require("./Booking");

//Link Users & Bookings (One-to-Many)
User.hasMany(Booking);
Booking.belongsTo(User);

//Link Buses & Bookings (One-to-Many)
Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = {
  User,
  Booking,
  Bus,
};
