const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Xác thực token và gán thông tin người dùng vào req.user
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Không có token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // hoặc gán luôn cả User info nếu muốn
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token không hợp lệ' });
  }
};

// Bảo vệ route: yêu cầu phải có token và user tồn tại
const protect = async (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Chưa xác thực' });

  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(401).json({ message: 'Người dùng không tồn tại' });

    req.user = user; // cập nhật user đầy đủ
    next();
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ' });
  }
};

// Chỉ cho phép admin
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Chỉ admin mới có quyền truy cập' });
  }
};

// Chỉ cho phép admin hoặc nhân viên
const staffOnly = (req, res, next) => {
  if (req.user && ['admin', 'staff'].includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({ message: 'Chỉ nhân viên hoặc admin mới có quyền truy cập' });
  }
};

module.exports = {
  authenticateToken,
  protect,
  adminOnly,
  staffOnly
};
