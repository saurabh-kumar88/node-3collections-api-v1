const express = require('express');
const router = express.Router();

// index page (endpoints description)
router.get('/', function(req, res){
    res.render('index');
});


module.exports = router;