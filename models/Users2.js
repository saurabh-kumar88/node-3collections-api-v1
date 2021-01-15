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

// main documnet
var User = new mongoose.Schema({
        name: String,
        email: String,
        bio: String,
        profilePic: String,
        business: [Business],
        products: [Products],
    })

const Users2 = mongoose.model('User', User);
module.exports = Users2;

