const express = require("express");
const app = express();
const productsRouter = require("./routes/products.js");
const categoriesRouter = require("./routes/categories.js");

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
