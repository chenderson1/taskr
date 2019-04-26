const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const boardRoutes = require("./routes/boardRoutes");

const PORT = process.env.PORT || 5100;

//global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//DB connect
mongoose.connect(
  "mongodb://localhost:27017/taskr",
  { useNewUrlParser: true },
  () => console.log("connected to DB".rainbow)
);

//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.use("/api/boards", boardRoutes);

//server listen
app.listen(PORT, () => {
  console.log(`The magic happend on  port:${PORT}`.random);
});
