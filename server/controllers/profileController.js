const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
  const { userId, gender, age, religion, caste, education, bio } = req.body;
  const image = req.file?.filename;
  const profile = await Profile.create({ userId, gender, age, religion, caste, education, bio, image });
  res.json(profile);
};

exports.searchProfiles = async (req, res) => {
  const results = await Profile.find(req.query);
  res.json(results);
};