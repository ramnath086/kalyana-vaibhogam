const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: String,
  gender: String,
  age: Number,
  religion: String,
  caste: String,
  education: String,
  bio: String,
  image: String,
});

module.exports = mongoose.model('Profile', profileSchema);