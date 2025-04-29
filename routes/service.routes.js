const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/services.controller.js');
const authenticateToken = require('../middlewares/authMiddleware');

// Request Service Quote
router.post('/quote', authenticateToken, serviceController.requestQuote);

// Submit Service Feedback
router.post('/feedback', authenticateToken, serviceController.submitFeedback);

module.exports = router;
