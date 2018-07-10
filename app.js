const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');
const promisify = require('es6-promisify');
const passport = require('passport');

// Global Imports
const User = require('./models/User');
const Company = require('./models/Company');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();

//////////////
//MIDDLEWARE//
//////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////
//ROUTES//
//////////

app.get('/', (req, res) => {
    res.send('Root');
})

app.use('/users', userRoutes);
app.use('/companies', companyRoutes);

//////////////////
//ERROR HANDLERS//
//////////////////

if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);

module.exports = app;