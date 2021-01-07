const mongoose      = require('mongoose');
var autoIncrement   = require('simple-mongoose-autoincrement');

const Users = mongoose.model(
    "Users",
    new mongoose.Schema({
      name: String,
      email: String,
      bio: String,
      profilePic: String,
      createdAt: { type : Date, default : Date.now()},
      business: [{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Business"
      }],
      products : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
      }]

    })
  );
  
  module.exports = Users;
  


  
  

  
