const express = require("express");
const app = express();

app.get("/orders", (req, res) => {
  res.send("<h1>Here is the list of all orders.</h1>");
});

app.post("/orders", (req, res) => {
  res.send("<h1>A new order has been created.</h1>");
});

app.get("/users", (req, res) => {
  res.send("<h1>Here is the list of all users.</h1>");
});

app.post("/users", (req, res) => {
  res.send("<h1>A new user has been added.</h1>");
});

const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
