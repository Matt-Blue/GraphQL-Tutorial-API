const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

// GET all Users
exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

// GET one User
exports.getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json(user);
}

// POST new User
exports.postUser = async (req, res) => {
    const user = await (new User(req.body)).save();
    res.json(user);
}

// PUT User

// DELETE User