// routes/planRoutes.js
const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

// Fetch all available plans
router.get('/plans', planController.getAllPlans);

module.exports = router;
