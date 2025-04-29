const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  getUserProfile,
  updateUserProfile,
  changePassword,
  sendNotification,
  getNotifications,
} = require('../controllers/user.controller.js');

const router = express.Router();

// Lấy thông tin hồ sơ người dùng
router.get('/profile', protect, getUserProfile);

// Cập nhật thông tin hồ sơ
router.put('/profile', protect, updateUserProfile);

// Đổi mật khẩu
router.put('/change-password', protect, changePassword);

// Gửi thông báo
router.post('/notifications', protect, sendNotification);

// Lấy danh sách thông báo
router.get('/notifications', protect, getNotifications);

module.exports = router;
