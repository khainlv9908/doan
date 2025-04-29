const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const authenticateToken = require('../middlewares/authMiddleware');

// Create Payment
router.post('/charge', authenticateToken, paymentController.createPayment);

// Get Payment History
router.get('/history', authenticateToken, paymentController.getPaymentHistory);

module.exports = router;
