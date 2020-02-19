const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// make sure URL strings are valid (i.e remove spaces)
app.use(bodyParser.urlencoded({ extended: true }));

// allow requests to come from different origins
app.use(cors());

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
