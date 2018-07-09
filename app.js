const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');

const User = require('./models/User')
const userRoutes = require('./routes/users');

const app = express();

//////////////
//MIDDLEWARE//
//////////////

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//////////
//ROUTES//
//////////

app.get('/', (req, res) => {
    res.send('Root');
})

app.use('/users', userRoutes);

//////////////////
//ERROR HANDLERS//
//////////////////

if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);

module.exports = app;