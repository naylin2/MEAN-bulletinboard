const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  mail: String,
  dob: String
});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;
