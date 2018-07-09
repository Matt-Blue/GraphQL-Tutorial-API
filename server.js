const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => { // Listen for errors
  console.error(`Error: ${err.message}`);
});

// Global imports
require('./models/User');

// Start app
const app = require('./app');

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`API Running on port ${server.address().port}`);
});

