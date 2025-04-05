const express = require("express");
const app = express();

const PORT = 3000;
app.listen(3000, () => {
  console.log(
    `Server is up and running on port ${PORT}! Ready to handle requests.`
  );
});
