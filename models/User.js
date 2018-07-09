const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator'); // input validator
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = User = mongoose.model('User', UserSchema);