const express = require('express');
const router = express.Router();
const { sendInterest, getSentInterests } = require('../controllers/interestController');

router.post('/send', sendInterest);
router.get('/sent/:userId', getSentInterests);

module.exports = router;