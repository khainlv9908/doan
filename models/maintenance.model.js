const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle'
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'in-progress'],
    default: 'scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  scheduledDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
