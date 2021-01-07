const mongoose = require("mongoose");

const Business = mongoose.model(
  "Business",
  new mongoose.Schema({
    name: String,
    email: String,
    registrationNo: String,
    createdAt: { type : Date, default : Date.now()},
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Users'
    },
  })
);

module.exports = Business;