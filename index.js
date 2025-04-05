const express = require("express");
const app = express();
const booksRouter = require("./routes/books.js");

app.use("/books", booksRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
