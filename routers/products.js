const express       = require('express');
const router        = express.Router()

const productsController    = require('../controllers/productsController');

router.post('/products/add', productsController.Add);
router.post('/prodcuts/list-all', productsController.List_products);
router.post('/products/get-product', productsController.Get_single_product);
router.delete('/products/delete', productsController.Delete_product);
router.put('/products/update', productsController.Update_product);

module.exports = router; 