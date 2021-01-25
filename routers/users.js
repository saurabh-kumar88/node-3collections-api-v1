const express       = require('express');
const router        = express.Router()

const usersController    = require('../controllers/usersController');

router.get('/list-all-users', usersController.list_users);

router.post('/add', usersController.add);
router.post('/get-user', usersController.get_user);
router.post('/products/add', usersController.add_product);
router.put('/products/update', usersController.update_product);
router.post('/products/get-product', usersController.get_product);
router.post('/products/list-all', usersController.list_products);

router.delete('/products/delete', usersController.delete_product);

module.exports = router; 