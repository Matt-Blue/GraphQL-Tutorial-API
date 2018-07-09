const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');

// GET all Users
router.get('/', catchErrors(userController.getUsers));

// GET one User
router.get('/:id', catchErrors(userController.getUser));

// POST new User
router.post('/', catchErrors(userController.postUser));

// PUT User

// DELETE User

module.exports = router;