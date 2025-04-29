require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const vehicleRoutes = require('./routes/vehicle.routes');
const inventoryRoutes = require('./routes/inventory.routes');
const paymentRoutes = require('./routes/payment.routes');
const maintenanceRoutes = require('./routes/maintenance.routes');
const serviceRoutes = require('./routes/service.routes');
const chatbotRoutes = require('./routes/chatbot.routes.js');

// Initialize app
const app = express();

// Middleware
app.use(cors()); // Allow Cross-Origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes middleware
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB:', err));

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
