/********************************************
 * 
 * this is the database config file
 * this file connects to the database 
 * it also imports any models we made
 * 
 */

const mongoose = require("mongoose");

const dbURI = process.env.DB_URI;

// TODO: Check if this needs to be removed
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true //got deprecation warning for string parser on 2019-19-06, 
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models
//* do i need to include this? this works without it
// require("../models/New_Bar");
// require("../models/All_Bars");