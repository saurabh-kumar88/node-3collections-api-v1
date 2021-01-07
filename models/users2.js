const mongoose = require('mongoose');


var Business = new mongoose.Schema({
    name: String,
    email: String,
    registrationNo: String,
});

var Products = new mongoose.Schema({
    name: String,
    mrp: String,
    description: String,
    image: String,
});

// const Users2 = new mongoose.Schema({
//     name: String,
//     email: String,
//     bio: String,
//     profilePic: String,
//     business: [Business],
//     products: [Products],
// });

const Users2 = mongoose.model(
    'Users2',
    new mongoose.Schema({
        name: String,
        email: String,
        bio: String,
        profilePic: String,
        business: [Business],
        products: [Products],
    })
);

module.exports = Users2;