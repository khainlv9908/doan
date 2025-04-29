const Vehicle = require('../models/vehicle.model.js');

// Lấy danh sách xe của người dùng
const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({ owner: req.user._id });
  res.json(vehicles);
};

// Thêm xe mới
const addVehicle = async (req, res) => {
  const { brand, model, plateNumber, year } = req.body;

  const vehicle = new Vehicle({
    owner: req.user._id,
    brand,
    model,
    plateNumber,
    year,
  });

  await vehicle.save();
  res.status(201).json(vehicle);
};

// Cập nhật xe
const updateVehicle = async (req, res) => {
  const vehicle = await Vehicle.findOne({ _id: req.params.id, owner: req.user._id });

  if (!vehicle) return res.status(404).json({ message: 'Không tìm thấy xe' });

  vehicle.brand = req.body.brand || vehicle.brand;
  vehicle.model = req.body.model || vehicle.model;
  vehicle.plateNumber = req.body.plateNumber || vehicle.plateNumber;
  vehicle.year = req.body.year || vehicle.year;

  await vehicle.save();
  res.json(vehicle);
};

// Xoá xe
const deleteVehicle = async (req, res) => {
  const vehicle = await Vehicle.findOne({ _id: req.params.id, owner: req.user._id });

  if (!vehicle) return res.status(404).json({ message: 'Xe không tồn tại' });

  await vehicle.deleteOne();
  res.json({ message: 'Đã xoá xe' });
};

module.exports = {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
