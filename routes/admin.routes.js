const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const {
  getAllUsers,
  updateUserRole,
  deleteUser,
} = require('../controllers/admin.controller');

const router = express.Router();

// Chỉ admin mới được phép truy cập
router.use(protect, adminOnly);

// Danh sách tất cả người dùng
router.get('/users', getAllUsers);

// Cập nhật phân quyền người dùng
router.put('/users/:id/role', updateUserRole);

// Xoá người dùng
router.delete('/users/:id', deleteUser);

module.exports = router;
