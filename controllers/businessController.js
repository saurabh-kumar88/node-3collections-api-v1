const User      = require('../models/Users2');
const Joi       = require('joi');


// add
  const add_business = async (req, res) => {
    // const { error } = validateInputData(req.body);
    // if(error) return res.status(400).send({message : error.details[0].message});
    
      // If no error, save it to DB
       User.findById(req.body.user_Id, function(err, user){
        if(err) res.json(err); 
    
        user.business.push({
          name : req.body.name,
          email : req.body.email,
          registrationNo: req.body.registrationNo
        });

        try {
          const businessSaved = user.save();
          res.json("Done")
        } catch (error) {
          res.json({ message : error })
        }
      });
  
  };

// list all businesses by user_id
const list_business = async (req, res) => {
    try {
      const user = await User.find({ '_id' : req.body.user_Id });
      if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
      res.json(user[0].business);
    } catch (error) {
      res.json({ message : error })
    }
};

const get_business = async (req, res) => {
  try {
    const user = await User.find({ '_id' : req.body.user_Id });
    if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
    
    res.json(user[0].business.id(req.body.business_Id));
    
  } catch (error) {
    res.json({ message : error })
  }
};


// add product
const add_product = async (req, res) => {
  // const { error } = validateInputData(req.body);
  // if(error) return res.status(400).send({message : error.details[0].message});
  try {
    const user = await User.find({ '_id' : req.body.user_Id }, function(err, subDoc){
       
      if(err) res.json(err);
      else{
        subDoc[0].business.id(req.body.business_Id).products.push({
          name : req.body.name,
          mrp : req.body.mrp,
          description : req.body.description,
          image : req.body.image
        });
        subDoc[0].save();
        res.json("Done");
      }
    });
    
    
  } catch (error) {
    res.json({ message : error })
  }

}


// update product
const update_product = async (req, res) => {
  // const { error } = validateInputData(req.body);
  // if(error) return res.status(400).send({message : error.details[0].message});
  try {
    const user = await User.find({ '_id' : req.body.user_Id }, function(err, subDoc){
       
      if(err) res.json(err);
      else{
        subDoc[0].business.id(req.body.business_Id).products.id(req.body.product_Id).set(
          {
              name : req.body.name,
              mrp : req.body.mrp,
              description : req.body.description,
              image : req.body.image
          });
        subDoc[0].save();
        res.json("Done");
      }
    });
    
    
  } catch (error) {
    res.json({ message : error })
  }

}

// list all products
const list_products = async (req, res) => {
  // const { error } = validateInputData(req.body);
  // if(error) return res.status(400).send({message : error.details[0].message});
  try {
    const user = await User.find({ '_id' : req.body.user_Id }, function(err, subDoc){ 
      
      if(err) res.json(err);
      else{
        res.json(subDoc[0].business.id(req.body.business_Id).products);
      }
    });
    
    
  } catch (error) {
    res.json({ message : error })
  }

}

const get_product = async (req, res) => {
  // const { error } = validateInputData(req.body);
  // if(error) return res.status(400).send({message : error.details[0].message});
  try {
    const user = await User.find({ '_id' : req.body.user_Id }, function(err, subDoc){
       
      if(err) res.json(err);
      else{
        res.json(subDoc[0].business.id(req.body.business_Id).products.id(req.body.product_Id));
      }
    });
    
  } catch (error) {
    res.json({ message : error })
  }

}

// delete product
const delete_product = async (req, res) => {
  // const { error } = validateInputData(req.body);
  // if(error) return res.status(400).send({message : error.details[0].message});
  try {
    const user = await User.find({ '_id' : req.body.user_Id }, function(err, subDoc){
  
      if(err) res.json(err);
      else{
        subDoc[0].business.id(req.body.business_Id).products.pull({'_id' : req.body.product_Id});
        subDoc[0].save();
        res.json("Done");
      }
    });
  } catch (error) {
    res.json({ message : error })
  }

}





  // validating users input data for post request
  function validateInputData(inputData){
	const schema = {
    name    : Joi.string().max(50).required(),
    email   : Joi.string().required(),
    registrationNo  : Joi.string().max(100).required(),
    
	};
	return Joi.validate(inputData, schema);
};

module.exports = {
    add_business,
    list_business,
    get_business,
    add_product,
    update_product,
    list_products,
    get_product,
    delete_product,
    
}