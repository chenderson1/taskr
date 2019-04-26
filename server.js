const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 5100;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`The magic happend on  port:${PORT}`.rainbow);
});
