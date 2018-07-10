const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator'); // input validator
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Company = mongoose.model('Company', CompanySchema);