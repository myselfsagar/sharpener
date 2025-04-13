const express = require("express");
const app = express();
const dbConnect = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");

//middlewares
app.use(express.json());

//all routes
app.use("/students", studentRoutes);

//homepage
app.get("/", (req, res) => {
  res.send("Welcome to student app");
});

dbConnect
  .sync({ force: true })
  .then(() => {
    //Start the server
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
