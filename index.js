const express = require("express");
const app = express();

//connect to db
const dbConnection = require("./utils/db-connection");

//models
const UserModel = require("./models/User");
const BusModel = require("./models/Bus");
const BookingModel = require("./models/Booking");
const PaymentModel = require("./models/Payment");

//import all routes
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

//use middlewares
app.use(express.json());

//use all routes
app.use("/users", userRoutes);
app.use("/buses", busRoutes);

dbConnection
  .sync({ alter: true })
  .then(() => {
    //start the server
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("Server running on PORT", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
