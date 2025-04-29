const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');
const authenticateToken = require('../middlewares/authMiddleware');

// Create Maintenance Request
router.post('/', authenticateToken, maintenanceController.createMaintenanceRequest);

// Get Maintenance History
router.get('/history', authenticateToken, maintenanceController.getMaintenanceHistory);

// Schedule Maintenance
router.post('/schedule', authenticateToken, maintenanceController.scheduleMaintenance);

module.exports = router;
