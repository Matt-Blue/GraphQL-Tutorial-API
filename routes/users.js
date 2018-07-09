const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route POST  /api/users/
// @description Get all users
// @access      Public
router.get('/', (req, res) => {
    console.log('users');
});

module.exports = router;