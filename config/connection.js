const mongoose = require('mongoose');
// const { connect, connection } = require('mongoose');

// process.env.MONGODB_URI ||

mongoose.connect('mongodb://127.0.0.1:27017/studentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.set("debug", true); // enable logging collection methods + arguments to the console/file (from docs)

module.exports = mongoose.connection;