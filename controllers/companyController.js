const mongoose = require('mongoose');
const Company = mongoose.model('Company');
const User = mongoose.model('User');

// POST new Company
exports.postCompany = async (req, res) => {
    let company = await (new Company(req.body)).save();
    if(!company){ return res.status(500).send({ success: false, message: 'Company unsuccessfully created'}); }
    res.json(company);
}

// GET all Companies
exports.getCompanies = async (req, res) => {
    let companies = await Company.find();
    if(!companies){ return res.status(404).send({ success: false, message: 'Companies not found'}); }
    res.json(companies);
}

// GET one Company
exports.getCompany = async (req, res) => {
    let company = await Company.findOne({ _id: req.params.id });
    if(!company){ return res.status(404).send({ success: false, message: 'Company not found'}); }
    res.json(company);
}

// PATCH Company
exports.patchCompany = async (req, res) => {
    let company = await Company.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!company){ return res.status(404).send({ success: false, message: 'Company not found'}); }
    res.json(company);
}

// DELETE Company
exports.deleteCompany = async (req, res) => {
    let company = await Company.findByIdAndRemove(req.params.id);
    if(!company){ return res.status(404).send({ success: false, message: 'Company not found'}); }
    res.json(company);
}

// GET Users by Company
exports.getUsersByCompany = async (req, res) => {
    let users = await User.find({ companyId: req.params.id });
    if(!users){ return res.status(404).send({ success: false, message: 'Users not found'}); }
    res.json(users);
}