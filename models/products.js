const mongoose = require("mongoose");

const Products = mongoose.model(
  "Products",
  new mongoose.Schema({
    name: String,
    mrp: String,
    description: String,
    image: String,
    createdAt: { type : Date, default : Date.now()},
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }
  })
);

module.exports = Products;