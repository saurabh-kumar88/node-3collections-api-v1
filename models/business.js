const mongoose = require("mongoose");

const Business = mongoose.model(
  "Business",
  new mongoose.Schema({
    name: String,
    email: String,
    registrationNo: String,
    createdAt: { type : Date, default : Date.now()}
  })
);

module.exports = Business;