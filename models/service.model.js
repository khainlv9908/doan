const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const serviceSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  feedback: [feedbackSchema], // Array to store feedback
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Service', serviceSchema);
