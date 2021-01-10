const express       = require('express');
const router        = express.Router()

const businessController    = require('../controllers/businessController');

router.post('/add', businessController.add_business);
router.post('/get-business', businessController.get_business);
router.post('/list-all', businessController.list_business);

router.post('/products/list-all', businessController.list_products);
router.post('/products/get-product', businessController.get_product);
router.post('/products/add', businessController.add_product);
router.put('/products/update', businessController.update_product);
router.delete('/products/delete', businessController.delete_product);

module.exports = router; 