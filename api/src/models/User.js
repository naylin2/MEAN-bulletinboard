const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
});

userSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;
    next();
  }
);

userSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;
