const express = require("express");
const app = express();

//connect to db
const dbConnection = require("./utils/db-connection");

//import all routes
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

//use middlewares
app.use(express.json());

//use all routes
app.use("/users", userRoutes);
app.use("/buses", busRoutes);

//start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
