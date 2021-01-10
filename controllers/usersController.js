const User      = require('../models/Users');
const Joi       = require('joi');

// list all users
const list_users = async (req, res, next) => {  
    try {
      const users_list = await User.find({}).sort('-createdAt')
      res.json(users_list);
    } catch (error) {
      res.json({ message : error })
    }  
}

// get user 
const get_user = async (req, res) => {
  try {
      const user = await User.find({ '_Id' : req.params.user_Id });
      if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
      res.json(user);
    } catch (error) {
      res.json({ message : error })
    }
    
  };


// add
const add = async (req, res) => {
    // const { error } = validateInputData(req.body);
    // if(error) return res.status(400).send({message : error.details[0].message});
    
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


  // add product
const add_product = async (req, res) => {
  // const { error } = validateInputData(req.body);
  // if(error) return res.status(400).send({message : error.details[0].message});
  
  // If no error, save it to DB
  await User.findById(req.body.user_Id, function(err, user){
  user.products.push({
      name : req.body.name,
      mrp : req.body.mrp,
      description: req.body.description,
      image: req.body.image,
  });

  try {
      const productSaved = user.save();
      res.json("Done");
  } catch (error) {
      res.json({ message : error })
   }
  });

};

// update product
const update_product = async (req, res) => {
  await User.findById({'_id' : req.body.user_Id}, function(err, result){
      if(err){
          res.json(err);
      } else {
              result.products.id(req.body.product_Id).set(
                  {
                      name : req.body.name,
                      mrp : req.body.mrp,
                      description : req.body.description,
                      image : req.body.image
                  });
              result.save();
              res.json('Done');
          }
      }); 
};

// get product
const get_product = async (req, res) => {
  try {
    const user = await User.find({ '_id' : req.body.user_Id });
    if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
  res.json(user[0].products.id(req.body.product_Id));
  } catch (error) {
    res.json({ message : error })
  }
};

// list all products
const list_products = async (req, res) => {
  try {
    const user = await User.find({ '_id' : req.body.user_Id });
    if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
    res.json(user[0].products);
  } catch (error) {
    res.json({ message : error })
  }
};

// delete product
const delete_product = async (req, res) => {
  await User.findOne({'_id' : req.body.user_Id}, function(err, result){
      if(err){
          res.json(err);
      } else {
          result.products.pull({'_id' : req.body.product_Id});
          result.save();
          res.json("Done");
      }
  })
  
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
    add,
    list_users,
    get_user,
    add_product,
    update_product,
    get_product,
    list_products,
    delete_product,
}