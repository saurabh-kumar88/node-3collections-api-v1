const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
    title     : String
  , body      : String
  , date      : Date
  });

  const Reports = new mongoose.Schema({
    title     : String
  
  });
  
  const BlogPost = new mongoose.Schema({
    title     : String
  , body      : String
  , date      : String
  , comments  : [Comments],
    reports : [Reports] 
  , meta      : {
        votes : Number
      , favs  : Number
    }
  });
  
  const Blogs =  mongoose.model('BlogPost', BlogPost);
  module.exports = Blogs;