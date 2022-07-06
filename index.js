const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const postRoute = require("./routes/post");

require("dotenv").config();

//connect with database : mongoose
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error in connecting databases", err));

//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use("/api/post", postRoute); //change to down one

app.listen(3001, () => {
  console.log("server is connected");
});

// app.use("/api/post", postRoute);

// app.use((err, req, res, next) => {
//   console.log("error: ", err);
//   res.status(500).json({ message: "Internal server error" });
// });
