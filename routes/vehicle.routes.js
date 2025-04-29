const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicle.controller.js');

const router = express.Router();

router.use(protect);

// Danh sách xe khách hàng
router.get('/', getVehicles);

// Thêm xe mới
router.post('/', addVehicle);

// Cập nhật thông tin xe
router.put('/:id', updateVehicle);

// Xoá xe
router.delete('/:id', deleteVehicle);

module.exports = router;
