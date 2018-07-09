const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

// GET all Users
exports.getUsers = (req, res) => {
    res.json({
        data: {
            user: 'User'
        },
        success: true
    });
}