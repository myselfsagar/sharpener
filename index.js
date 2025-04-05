const express = require("express");
const app = express();

const userMiddleware = (req, res, next) => {
  req.user = "Guest";
  next();
};

app.get("/welcome", userMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

const PORT = 3000;
app.listen(3000, () => {
  console.log(
    `Server is up and running on port ${PORT}! Ready to handle requests.`
  );
});
