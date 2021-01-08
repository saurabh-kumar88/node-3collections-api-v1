const express       = require('express');
const router        = express.Router()

const usersController    = require('../controllers/businessController');

router.post('/add', usersController.Add);
// router.get('/list-all-users', usersController.List_users);
// router.get('/get-user', usersController.getUser);

module.exports = router; 