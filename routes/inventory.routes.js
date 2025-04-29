const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller');
const authenticateToken = require('../middlewares/authMiddleware');

// Get Inventory Items
router.get('/items', authenticateToken, inventoryController.getInventoryItems);

// Add Inventory Item
router.post('/items', authenticateToken, inventoryController.addInventoryItem);

// Update Inventory Item
router.put('/items/:id', authenticateToken, inventoryController.updateInventoryItem);

// Delete Inventory Item
router.delete('/items/:id', authenticateToken, inventoryController.deleteInventoryItem);

module.exports = router;
