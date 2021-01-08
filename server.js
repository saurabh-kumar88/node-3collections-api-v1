const express       = require('express');
const mongoose = require("mongoose");
const db = require("./models");
/** Middlewares */
const bodyParser    = require('body-parser');

const UsersRoute     = require('./routers/users');
const BusinessRoute = require('./routers/business');




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


const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
});


// parent routes
app.use('/api/v1/users', UsersRoute);
app.use('/api/v1/business', BusinessRoute);



// app.use('/api/employee', EmployeeRoute);
// app.use('/api/todo', TodoRoute);

// const createUser = function(user) {
//     return db.Users.create(user).then(docUser => {
//       console.log("\n>> Created User:\n", docUser);
//       return docUser;
//     });
//   };

// const createBusiness = function(usersId, business) {
//     return db.Business.create(business).then(docBusiness => {
//       console.log("\n>> Created Business:\n", docBusiness);
  
//       return db.Users.findByIdAndUpdate(
//         usersId,
//         { $push: { business: docBusiness._id } },
//         { new: true, useFindAndModify: false }
//       );
//     });
//   };

// const createProduct_through_user = function(usersId, product) {
//   return db.Products.create(product).then(docProducts => {
//     console.log("\n>> Created product :\n", docProducts);

//     return db.Users.findByIdAndUpdate(
//       usersId,
//       { $push: { product: docProducts._id } },
//       { new: true, useFindAndModify: false }
//     );
//   })
// }

// const createProduct_through_business = function(businessId, product) {
//   return db.Products.create(product).then(docProducts => {
//     console.log("\n>> Created product :\n", docProducts);

//     return db.Business.findByIdAndUpdate(
//       businessId,
//       { $push: { product: docProducts._id } },
//       { new: true, useFindAndModify: false }
//     );
//   })
// }

 
// const run = async function(){
//     var user = await createUser({
//         name : "test user2",
//         email: "ykings.saurabh@gmail.com",
//         bio: "bla vla",
//         profilePic:"my image",
//     });
    
//     user = await createBusiness(user._id,{
//         name:"e-commerse",
//         email:"saurabhkmr70@gmail.com",
//         registrationNo:"XXXHDSG120",
//     });

//     user = await createBusiness(user._id,{
//         name:"grocery",
//         email:"aniket.nice@hotmail.com",
//         registrationNo:"4545XXXS@ds",
//     });

//     user = await getUsersWithPopulate(user._id);
//     console.log("\n>> populate users:\n");
// }

// const getUsersWithPopulate = function(id) {
//     return db.Users.findById(id).populate("business");
//   };

// const run2 = async function() {
//   var user = await createUser({
//     name : "test user5",
//     email: "XXXXXXX@gmail.com",
//     bio: "bla vla&*&*&*",
//     profilePic:"my imag(*(e",
// });

//   user = await createBusiness(user._id,{
//       name:"automotive",
//       email:"*****%%%@gmail.com",
//       registrationNo:"XXXHDSG120",
//   });

//   user = await createProduct_through_user(user._id,{
//     name:"toy car",
//     mrp:"120",
//     description:"rc toy car for kids",
//     image:"car image",

//   });
// }

// /** test code embedded database */


// /** */

// const addUser = async function(){
//   var post = new db.Users2({
//     name : 'Jhon doe',
//     email: 'XXCC@gmail.com',
//     bio: "HJGHJGHJJJJJJ",
//   })
//   post.business.push({
//     name:"e-commerse",
//     email:"XYZ@gmail.com",
//     registrationNo:"XBNXVH^&%^&78",

//   })
//   post.products.push({
//     name:'bluetooth speekers',
//     mrp:'4500',
//     description:'KHJKHKJ%^$%^',
//     image:'G&*^&%&^'
//   })

//   try {
//     const savedpost = await post.save();
//     console.log(savedpost);
//   } catch (error) {
//     console.log(error)
//   }

// }

// const read = async () => {
//   try {
//     var post = await db.Users2.findById("5ff75f748a02b33698f9a98a")
//       console.log(post.business[0]);  
//   } catch (error) {
//     console.log(error);
//   }
// }

const addBusiness = async (userId, businessData) => {
  try {
    db.Users.findByIdAndUpdate(
      userId,
      { $push: { business: businessData } },
      { new: true, useFindAndModify: false }
    );
  } catch (error) {
    console.log(error)
  }

}

addBusiness("5ff8311c07f8772c40f2adf8",
  {
    name:"e-commerse",
    email:"XYZ@gmail.com",
    registrationNo:"XBNXVH^&%^&78",
  })

// read()


// // addUser()
// // run2();
// // run();




