const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createProfile, searchProfiles } = require('../controllers/profileController');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), createProfile);
router.get('/search', searchProfiles);

module.exports = router;