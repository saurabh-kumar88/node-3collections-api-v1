const User      = require('../models/Users');
const Joi       = require('joi');


// add
const Add = async (req, res) => {
    const { error } = validateInputData(req.body);
    if(error) return res.status(400).send({message : error.details[0].message});
    
      // If no error, save it to DB
      try {
        var add_business = await User.find({ '_Id' : req.params.Id });
        if(add_business.length == 0) return res.status(404).send({message : 'No such record found!'});
        // res.json(add_business)
        add_business.business.push({
                name:"e-commerse",
                email:"XYZ@gmail.com",
                registrationNo:"XBNXVH^&%^&78",
        })
      } catch (error) {
          res.json({message : error})
      }
      
      try {
        const business_created = await add_business.save();
        res.json(business_created)
      } catch (error) {
        res.json({ message : error })
      }
  };


// // list all users
// const List_users = async (req, res, next) => {  
//     try {
//       const users_list = await User.find({}).sort('-createdAt')
//       res.json(users_list);
//     } catch (error) {
//       res.json({ message : error })
//     }  
// }

// // get user by id
// const getUser = async (req, res) => {
//     try {
//       const user = await User.find({ '_Id' : req.params.Id });
//       if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
//       res.json(user);
//     } catch (error) {
//       res.json({ message : error })
//     }
    
//   };




  // validating users input data for post request
  function validateInputData(inputData){
	const schema = {
    Id :  Joi.string().max(100).required(),
    name    : Joi.string().max(50).required(),
    email   : Joi.string().required(),
    registrationNo  : Joi.string().max(100).required(),
    
	};
	return Joi.validate(inputData, schema);
};

module.exports = {
    Add,
    // List_users,
    // getUser,
}