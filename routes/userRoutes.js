const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');

// POST new User
router.post('/', catchErrors(userController.postUser));

// GET all Users
router.get('/', catchErrors(userController.getUsers));

// GET one User
router.get('/:id', catchErrors(userController.getUser));

// PATCH User
router.patch('/:id', catchErrors(userController.patchUser));

// DELETE User
router.delete('/:id', catchErrors(userController.deleteUser));

module.exports = router;