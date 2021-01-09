const User      = require('../models/Users');
const Joi       = require('joi');


// add
  const Add = async (req, res) => {
    // const { error } = validateInputData(req.body);
    // if(error) return res.status(400).send({message : error.details[0].message});
    
      // If no error, save it to DB
      var add_new_business = User.findById(req.body.Id, function(err, user){
        user.business.push({
          name : req.body.name,
          email : req.body.email,
          registrationNo: req.body.registrationNo
        });

        try {
          const businessSaved = user.save();
          res.json(businessSaved)
        } catch (error) {
          res.json({ message : error })
        }
      });
  
  };

// list all businesses by user_id
const List_business = async (req, res) => {
    try {
      const user = await User.find({ '_Id' : req.params.Id });
      if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
      res.json(user[0].business);
    } catch (error) {
      res.json({ message : error })
    }
};


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
    Add,
    List_business,
    
}