const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot.controller.js');
const authenticateToken = require('../middleware/authMiddleware');

// Send Message to Chatbot
router.post('/', authenticateToken, chatbotController.sendMessage);

// Get Chatbot Response
router.get('/response', authenticateToken, chatbotController.getResponse);

module.exports = router;
