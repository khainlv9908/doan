const User = require('../models/user.model');

// Danh sách người dùng
const getAllUsers = async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
};

// Cập nhật vai trò người dùng
const updateUserRole = async (req, res) => {
  const { role } = req.body;
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

  user.role = role;
  await user.save();
  res.json({ message: 'Cập nhật phân quyền thành công' });
};

// Xoá người dùng
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: 'Người dùng không tồn tại' });

  await user.deleteOne();
  res.json({ message: 'Đã xoá người dùng' });
};

module.exports = {
  getAllUsers,
  updateUserRole,
  deleteUser,
};
