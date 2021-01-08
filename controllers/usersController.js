const User      = require('../models/Users');
const Joi       = require('joi');

// list all users
const List_users = async (req, res, next) => {  
    try {
      const users_list = await User.find({}).sort('-createdAt')
      res.json(users_list);
    } catch (error) {
      res.json({ message : error })
    }  
}

// get user by id
const getUser = async (req, res) => {
    try {
      const user = await User.find({ '_Id' : req.params.Id });
      if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
      res.json(user);
    } catch (error) {
      res.json({ message : error })
    }
    
  };


// add
const Add = async (req, res) => {
    const { error } = validateInputData(req.body);
    if(error) return res.status(400).send({message : error.details[0].message});
    
      // If no error, save it to DB
      const add_user = new User({
        name       : req.body.name,
        email      : req.body.email,
        bio        : req.body.bio,
        profilePic : req.body.profilePic
      });
  
      try {
        const savedUser = await add_user.save();
        res.json(savedUser)
      } catch (error) {
        res.json({ message : error })
      }
  };

  // validating users input data for post request
  function validateInputData(inputData){
	const schema = {
    name        : Joi.string().max(50).required(),
    email       : Joi.string().required(),
    bio         : Joi.string().max(100).required(),
    profilePic  : Joi.string().required()
	};
	return Joi.validate(inputData, schema);
};

module.exports = {
    Add,
    List_users,
    getUser,
}