const Interest = require('../models/Interests');

exports.sendInterest = async (req, res) => {
  const interest = await Interest.create(req.body);
  res.json(interest);
};

exports.getSentInterests = async (req, res) => {
  const { userId } = req.params;
  const interests = await Interest.find({ senderId: userId });
  res.json(interests);
};