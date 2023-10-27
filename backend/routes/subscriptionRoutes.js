// routes/subscriptionRoutes.js
const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Fetch subscription details for a user
router.get('/details/:userId', subscriptionController.getSubscriptionDetails);

module.exports = router;
