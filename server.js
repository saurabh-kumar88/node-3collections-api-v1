const mongoose = require("mongoose");
const db = require("./models");

require('dotenv/config');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

try {
mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser : true , useUnifiedTopology : true},
    () => {console.log('----- connected with DB -----')}   
);
} catch (error) {
console.log('----- unable to connect with DB ----')
}

const check_connection = mongoose.connection

check_connection.on('error' ,  (err) => {
    console.log(err);
});

check_connection.once('open', ()=>{
    console.log('Database Connection Established!');
});


const createUser = function(user) {
    return db.Users.create(user).then(docUser => {
      console.log("\n>> Created User:\n", docUser);
      return docUser;
    });
  };

const createBusiness = function(usersId, business) {
    return db.Business.create(business).then(docBusiness => {
      console.log("\n>> Created Business:\n", docBusiness);
  
      return db.Users.findByIdAndUpdate(
        usersId,
        { $push: { business: docBusiness._id } },
        { new: true, useFindAndModify: false }
      );
    });
  };

const run = async function(){
    var user = await createUser({
        name : "test user2",
        email: "ykings.saurabh@gmail.com",
        bio: "bla vla",
        profilePic:"my image",
    });
    
    user = await createBusiness(user._id,{
        name:"e-commerse",
        email:"saurabhkmr70@gmail.com",
        registrationNo:"XXXHDSG120",
    });

    user = await createBusiness(user._id,{
        name:"grocery",
        email:"aniket.nice@hotmail.com",
        registrationNo:"4545XXXS@ds",
    });

    user = await getUsersWithPopulate(user._id);
    console.log("\n>> populate users:\n");
}

const getUsersWithPopulate = function(id) {
    return db.Users.findById(id).populate("business");
  };


run();

