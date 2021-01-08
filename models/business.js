const mongoose = require("mongoose");

const Business = mongoose.model(
  "Business",
  new mongoose.Schema({
    name: {type : String, default: "XXXX"},
    email: {type : String, default: "XXXX"},
    registrationNo: {type : String, default: "XXXX" },
    createdAt: { type : Date, default : Date.now()},
  })
);

module.exports = Business;