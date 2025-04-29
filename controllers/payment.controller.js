const Payment = require('../models/payment.model');

// Create Payment
const createPayment = async (req, res) => {
  const { amount, transactionId } = req.body;
  try {
    const payment = new Payment({
      user: req.user._id,
      amount,
      transactionId
    });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Payment History
const getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user._id });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPayment,
  getPaymentHistory
};
