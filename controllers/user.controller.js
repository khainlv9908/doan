const User = require('../models/userModel');
const Notification = require('../models/notification.model.js');
const bcrypt = require('bcryptjs');

// Lấy thông tin hồ sơ người dùng
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
};

// Cập nhật hồ sơ người dùng
const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404).json({ message: 'Không tìm thấy người dùng' });
  }
};

// Đổi mật khẩu
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (!(await bcrypt.compare(currentPassword, user.password))) {
    return res.status(400).json({ message: 'Mật khẩu hiện tại không đúng' });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.json({ message: 'Đổi mật khẩu thành công' });
};

// Gửi thông báo
const sendNotification = async (req, res) => {
  const { title, message } = req.body;

  const notification = new Notification({
    user: req.user._id,
    title,
    message,
  });

  await notification.save();
  res.json({ message: 'Đã gửi thông báo' });
};

// Lấy danh sách thông báo
const getNotifications = async (req, res) => {
  const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(notifications);
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  changePassword,
  sendNotification,
  getNotifications,
};
