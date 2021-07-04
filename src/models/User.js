const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type: String, index: true, unique: true},
  user: String,
  password: String,
});
module.exports = mongoose.model('User', userSchema);
