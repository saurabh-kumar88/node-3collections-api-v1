const mongoose = require("mongoose");

const Business = mongoose.model(
  "Business",
  new mongoose.Schema({
    name: {type : String, default: "XXXX"},
    email: {type : String, default: "XXXX"},
    registrationNo: {type : String, default: "XXXX" },
    createdAt: { type : Date, default : Date.now()},
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Users'
    },
  })
);

module.exports = Business;