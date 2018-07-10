const mongoose = require('mongoose');
const User = mongoose.model('User');

// POST new User
exports.postUser = async (req, res) => {
    let user = await (new User(req.body)).save();
    if(!user){ return res.status(500).send({ success: false, message: 'User unsuccessfully created'}); }
    res.json(user);
}

// GET all Users
exports.getUsers = async (req, res) => {
    let users = await User.find();
    if(!users){ return res.status(404).send({ success: false, message: 'Users not found'}); }
    res.json(users);
}

// GET one User
exports.getUser = async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    if(!user){ return res.status(404).send({ success: false, message: 'User not found'}); }
    res.json(user);
}

// PATCH User
exports.patchUser = async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!user){ return res.status(404).send({ success: false, message: 'User not found'}); }
    res.json(user);
}

// DELETE User
exports.deleteUser = async (req, res) => {
    let user = await User.findByIdAndRemove(req.params.id);
    if(!user){ return res.status(404).send({ success: false, message: 'User not found'}); }
    res.json(user);
}