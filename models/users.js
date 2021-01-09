const mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');

var Business = new mongoose.Schema({
    
    business_Id: {type:Number, default:0},
    name: String,
    email: String,
    registrationNo: String,
});
Business.plugin(autoincrement, {field: 'business_Id'})

var Products = new mongoose.Schema({
    
    product_Id: {type:Number, default:0},
    name: String,
    mrp: String,
    description: String,
    image: String,
});
Products.plugin(autoincrement, {field: 'product_Id'})



var User = new mongoose.Schema({
        user_Id: {type:Number, default:0},
        name: String,
        email: String,
        bio: String,
        profilePic: String,
        business: [Business],
        products: [Products],
        createdAt: { type : Date, default : Date.now()},
    })
User.plugin(autoincrement, {field: 'product_Id'})

const Users = mongoose.model('User', User);
module.exports = Users;

