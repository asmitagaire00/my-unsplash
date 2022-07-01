const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const path = require("path");

require("dotenv").config;

//middleware
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("server is connected");
});
