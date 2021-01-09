const express       = require('express');
const router        = express.Router()

const productsController    = require('../controllers/productsController');

router.post('/add', productsController.Add);
router.post('/list-all-products', productsController.List_products);
router.get('/get-product', productsController.Get_single_product);
router.delete('/delete-product', productsController.Delete_product);
router.put('/update-product', productsController.Update_product);

module.exports = router; 