const express       = require('express');
const router        = express.Router()

const businessController    = require('../controllers/businessController');

router.post('/add', businessController.Add);
router.get('/list-all-business', businessController.List_business);


module.exports = router; 