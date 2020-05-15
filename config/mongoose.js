//include mongoose
const mongoose = require('mongoose');

//connect to the specified monodb database
mongoose.connect('mongodb://localhost/ecomm', {useNewUrlParser: true});

//check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: Mongoose-MongoDB'));
db.once('open', function() {
  // we're connected!
  console.log("Successfully connected to the database");
});

module.exports = db;