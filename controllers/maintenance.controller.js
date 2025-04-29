const Maintenance = require('../models/maintenance.model');

// Create Maintenance Request
const createMaintenanceRequest = async (req, res) => {
  const { vehicle, description, scheduledDate } = req.body;
  try {
    const maintenance = new Maintenance({
      vehicle,
      description,
      scheduledDate,
      status: 'scheduled'
    });
    await maintenance.save();
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Maintenance History
const getMaintenanceHistory = async (req, res) => {
  try {
    const maintenanceRecords = await Maintenance.find({ vehicle: req.params.id });
    res.status(200).json(maintenanceRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Schedule Maintenance
const scheduleMaintenance = async (req, res) => {
  const { maintenanceId, scheduledDate } = req.body;
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      maintenanceId,
      { scheduledDate, status: 'scheduled' },
      { new: true }
    );
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMaintenanceRequest,
  getMaintenanceHistory,
  scheduleMaintenance
};
