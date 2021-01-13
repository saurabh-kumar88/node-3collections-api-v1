const mongoose = require('mongoose');

var Products = new mongoose.Schema({
    name: String,
    mrp: String,
    description: String,
    image: String,

});


var Business = new mongoose.Schema({
    name: String,
    email: String,
    registrationNo: String,
    products: [Products],
});

var User = new mongoose.Schema({
        name: String,
        email: String,
        bio: String,
        profilePic: String,
        business: [Business],
        products: [Products],
    })

const Users = mongoose.model('User', User);
module.exports = Users;

