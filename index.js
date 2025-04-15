const express = require("express");
const app = express();

//connect to db
const dbConnection = require("./utils/db-connection");

//models
require("./models");

//import all routes
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

//use middlewares
app.use(express.json());

//use all routes
app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

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
