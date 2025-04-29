import React, { useEffect, useState } from "react";
import axios from "axios";

const Accounts = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/admin/users"); // Token sẽ được tự động gửi nếu dùng Interceptor
      setUsers(res.data);
    } catch (error) {
      console.error("Lỗi khi tải danh sách người dùng:", error);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa người dùng này?")) {
      try {
        await axios.delete(`/api/admin/users/${id}`);
        fetchUsers(); // Refresh danh sách
      } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const getRoleBadge = (role) => {
    switch (role) {
      case "admin": return <span className="badge bg-primary">Admin</span>;
      case "staff": return <span className="badge bg-info">Nhân viên</span>;
      default: return <span className="badge bg-secondary">Khách hàng</span>;
    }
  };

  const getStatusBadge = (createdAt) => {
    // Demo tạm trạng thái theo thời gian tạo (tuỳ dữ liệu thực tế)
    const days = (new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24);
    if (days < 1) return <span className="badge bg-warning">Chờ xác minh</span>;
    if (days < 30) return <span className="badge bg-success">Hoạt động</span>;
    return <span className="badge bg-danger">Bị chặn</span>; // Giả sử lâu quá là bị chặn
  };

  return (
    <div id="accounts" className="page-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 data-aos="fade-right">Quản lý tài khoản</h2>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#accountModal"
          data-aos="fade-left"
        >
          <i className="fas fa-plus-circle me-2" />
          Thêm tài khoản mới
        </button>
      </div>

      <div className="card mb-4" data-aos="fade-up">
        <div className="card-body">
          {/* Bộ lọc */}
          <div className="row mb-3">
            <div className="col-md-3 mb-3 mb-md-0">
              <select className="form-select">
                <option selected="">Vai trò</option>
                <option>Admin</option>
                <option>Nhân viên</option>
                <option>Khách hàng</option>
              </select>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <select className="form-select">
                <option selected="">Trạng thái</option>
                <option>Hoạt động</option>
                <option>Bị chặn</option>
                <option>Chờ xác minh</option>
              </select>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm theo tên, email..."
                />
                <button className="btn btn-outline-primary" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>

          {/* Bảng dữ liệu */}
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Vai trò</th>
                  <th>Trạng thái</th>
                  <th>Ngày tạo</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{getRoleBadge(user.role)}</td>
                    <td>{getStatusBadge(user.createdAt)}</td>
                    <td>{new Date(user.createdAt).toLocaleDateString("vi-VN")}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-icon btn-info me-1"
                        data-bs-toggle="modal"
                        data-bs-target="#accountModal"
                        title="Chỉnh sửa"
                      >
                        <i className="fas fa-edit" />
                      </button>
                      <button
                        className="btn btn-sm btn-icon btn-danger"
                        title="Xóa"
                        onClick={() => deleteUser(user._id)}
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phân trang tĩnh (có thể tích hợp phân trang động sau) */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#">Trước</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Sau</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
