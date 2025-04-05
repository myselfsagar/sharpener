const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.get("/products", (req, res) => {
  res.send("<h1>Here is the list of all products.</h1>");
});

app.post("/products", (req, res) => {
  res.send("<h1>A new product has been added.</h1>");
});

app.get("/categories", (req, res) => {
  res.send("<h1>Here is the list of all categories.</h1>");
});

app.post("/categories", (req, res) => {
  res.send("<h1>A new category has been created.</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
