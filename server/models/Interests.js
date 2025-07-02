const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  senderId: String,
  receiverId: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Interest', interestSchema);