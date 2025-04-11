const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

router.get('/users', userController.getUsers);
router.post('/users', validateUser, userController.createUser);
router.put('/users/:id', validateUser, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
module.exports = router;