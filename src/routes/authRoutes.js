const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateUser = require('../middleware/validateUser');

// Registration route with validation
router.post('/register',
    validateUser,
    authController.register
);

// Login route 
router.post('/login',
    authController.login
);

module.exports = router;