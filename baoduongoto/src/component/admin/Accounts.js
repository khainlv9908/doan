import React from "react";

const Accounts = () => {


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
                            <tr>
                                <td>001</td>
                                <td>Nguyễn Văn Admin</td>
                                <td>admin@example.com</td>
                                <td>
                                    <span className="badge bg-primary">Admin</span>
                                </td>
                                <td>
                                    <span className="badge bg-success">Hoạt động</span>
                                </td>
                                <td>01/01/2024</td>
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
                                    >
                                        <i className="fas fa-trash" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Trần Thị Nhân Viên</td>
                                <td>staff@example.com</td>
                                <td>
                                    <span className="badge bg-info">Nhân viên</span>
                                </td>
                                <td>
                                    <span className="badge bg-success">Hoạt động</span>
                                </td>
                                <td>15/01/2024</td>
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
                                    >
                                        <i className="fas fa-trash" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>Lê Thị Khách Hàng</td>
                                <td>customer@example.com</td>
                                <td>
                                    <span className="badge bg-secondary">Khách hàng</span>
                                </td>
                                <td>
                                    <span className="badge bg-warning">Chờ xác minh</span>
                                </td>
                                <td>20/02/2024</td>
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
                                    >
                                        <i className="fas fa-trash" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>004</td>
                                <td>Phạm Văn Bị Chặn</td>
                                <td>blocked@example.com</td>
                                <td>
                                    <span className="badge bg-secondary">Khách hàng</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger">Bị chặn</span>
                                </td>
                                <td>05/03/2024</td>
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
                                    >
                                        <i className="fas fa-trash" />
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation" className="mt-4">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                    Trước
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Sau
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default Accounts;
