const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
require("./model/userSchema");

app.use(express.json());

const port = process.env.PORT;

app.use(require("./routes/auth"));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

console.log("express works");
