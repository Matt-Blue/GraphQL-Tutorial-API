const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');

const User = require('../models/User');

// GET all Users
router.get('/', userController.getUsers);

module.exports = router;