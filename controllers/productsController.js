const User      = require('../models/Users');
const Joi       = require('joi');


// add product
const Add = async (req, res) => {
    // const { error } = validateInputData(req.body);
    // if(error) return res.status(400).send({message : error.details[0].message});
    
    // If no error, save it to DB
    var add_new_product = User.findById(req.body.Id, function(err, user){
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

// list all products by user_id
const List_products = async (req, res) => {
    try {
      const user = await User.find({ '_Id' : req.params.Id });
      if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
      res.json(user[0].products);
    } catch (error) {
      res.json({ message : error })
    }
};

const Get_single_product = async (req, res) => {
    try {
      const user = await User.find({ '_Id' : req.params.Id });
      if(user.length == 0) return res.status(404).send({message : 'No such record found!'}); 
    res.json(user[0].products[req.body.product_Id]);
    } catch (error) {
      res.json({ message : error })
    }
};

const Delete_product = async (req, res) => {
    await User.findOne({'_Id' : req.params.Id}, function(err, result){
        if(err){
            res.json(err);
        } else {
            result.products.pull({'_id' : req.body._Id});
            result.save();
            res.json("Done");
        }
    })
    
};

const Update_product = async (req, res) => {
    await User.findOne({'_Id' : req.params.Id}, function(err, result){
        if(err){
            res.json(err);
        } else {
            result.products.updateOne({'_id' : req.body._Id}, 
                {$set : {
                    name : req.body.name,
                    mrp : req.body.mrp,
                    description: req.body.description,
                    image: req.body.image }
                }
            )
            result.save();
            res.json("Done");
        }
    })
    
};




//   // validating users input data for post request
//   function validateInputData(inputData){
// 	const schema = {
//     name    : Joi.string().max(50).required(),
//     email   : Joi.string().required(),
//     registrationNo  : Joi.string().max(100).required(),
    
// 	};
// 	return Joi.validate(inputData, schema);
// };

module.exports = {
    Add,
    List_products,
    Get_single_product,
    Delete_product,
    Update_product,
    
}