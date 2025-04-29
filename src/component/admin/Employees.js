const App = () => {
    return (
        <div id="employees" className="page-content">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 data-aos="fade-right">Quản lý nhân viên</h2>
            <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#employeeModal"
                data-aos="fade-left"
            >
                <i className="fas fa-plus-circle me-2" />
                Thêm nhân viên mới
            </button>
        </div>
        <div className="row">
            <div className="col-md-12 mb-4" data-aos="fade-up">
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#employeesList"
                                    data-bs-toggle="tab"
                                >
                                    Danh sách nhân viên
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#salaryManagement"
                                    data-bs-toggle="tab"
                                >
                                    Quản lý lương
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#attendanceTracking"
                                    data-bs-toggle="tab"
                                >
                                    Theo dõi chấm công
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="employeesList">
                                <div className="row mb-3">
                                    <div className="col-md-3 mb-3 mb-md-0">
                                        <select className="form-select">
                                            <option selected="">Phòng ban</option>
                                            <option>Kinh doanh</option>
                                            <option>Marketing</option>
                                            <option>Kỹ thuật</option>
                                            <option>Kế toán</option>
                                            <option>Nhân sự</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3 mb-md-0">
                                        <select className="form-select">
                                            <option selected="">Trạng thái</option>
                                            <option>Đang làm việc</option>
                                            <option>Tạm nghỉ</option>
                                            <option>Đã nghỉ việc</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Tìm kiếm theo tên, mã NV..."
                                            />
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                            >
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Mã NV</th>
                                            <th>Họ tên</th>
                                            <th>Phòng ban</th>
                                            <th>Chức vụ</th>
                                            <th>Ngày vào</th>
                                            <th>Lương cơ bản</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>NV001</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23007BFF'/%3E%3Cpath d='M20 22C17.8 22 16 20.2 16 18C16 15.8 17.8 14 20 14C22.2 14 24 15.8 24 18C24 20.2 22.2 22 20 22ZM20 24C24.7 24 28 25.7 28 28V30H12V28C12 25.7 15.3 24 20 24Z' fill='white'/%3E%3C/svg%3E"
                                                        alt="Avatar"
                                                        className="avatar me-2"
                                                    />
                                                    <div>
                                                        <div>Nguyễn Văn A</div>
                                                        <small className="text-muted">
                                                            a.nguyen@example.com
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Kinh doanh</td>
                                            <td>Trưởng phòng</td>
                                            <td>01/01/2020</td>
                                            <td>₫ 15,000,000</td>
                                            <td>
                <span className="badge bg-success">
                  Đang làm việc
                </span>
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        Thao tác
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeDetailModal"
                                                            >
                                                                <i className="fas fa-eye me-2" />
                                                                Xem chi tiết
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeModal"
                                                            >
                                                                <i className="fas fa-edit me-2" />
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#salaryModal"
                                                            >
                                                                <i className="fas fa-money-bill me-2" />
                                                                Cập nhật lương
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="#"
                                                            >
                                                                <i className="fas fa-user-slash me-2" />
                                                                Ngừng làm việc
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>NV002</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23DC3545'/%3E%3Cpath d='M20 22C17.8 22 16 20.2 16 18C16 15.8 17.8 14 20 14C22.2 14 24 15.8 24 18C24 20.2 22.2 22 20 22ZM20 24C24.7 24 28 25.7 28 28V30H12V28C12 25.7 15.3 24 20 24Z' fill='white'/%3E%3C/svg%3E"
                                                        alt="Avatar"
                                                        className="avatar me-2"
                                                    />
                                                    <div>
                                                        <div>Trần Thị B</div>
                                                        <small className="text-muted">
                                                            b.tran@example.com
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Marketing</td>
                                            <td>Nhân viên</td>
                                            <td>15/03/2021</td>
                                            <td>₫ 10,000,000</td>
                                            <td>
                <span className="badge bg-success">
                  Đang làm việc
                </span>
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        Thao tác
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeDetailModal"
                                                            >
                                                                <i className="fas fa-eye me-2" />
                                                                Xem chi tiết
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeModal"
                                                            >
                                                                <i className="fas fa-edit me-2" />
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#salaryModal"
                                                            >
                                                                <i className="fas fa-money-bill me-2" />
                                                                Cập nhật lương
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="#"
                                                            >
                                                                <i className="fas fa-user-slash me-2" />
                                                                Ngừng làm việc
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>NV003</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23FFC107'/%3E%3Cpath d='M20 22C17.8 22 16 20.2 16 18C16 15.8 17.8 14 20 14C22.2 14 24 15.8 24 18C24 20.2 22.2 22 20 22ZM20 24C24.7 24 28 25.7 28 28V30H12V28C12 25.7 15.3 24 20 24Z' fill='white'/%3E%3C/svg%3E"
                                                        alt="Avatar"
                                                        className="avatar me-2"
                                                    />
                                                    <div>
                                                        <div>Lê Văn C</div>
                                                        <small className="text-muted">
                                                            c.le@example.com
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Kỹ thuật</td>
                                            <td>Kỹ sư</td>
                                            <td>10/07/2022</td>
                                            <td>₫ 12,000,000</td>
                                            <td>
                                                <span className="badge bg-warning">Tạm nghỉ</span>
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        Thao tác
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeDetailModal"
                                                            >
                                                                <i className="fas fa-eye me-2" />
                                                                Xem chi tiết
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeModal"
                                                            >
                                                                <i className="fas fa-edit me-2" />
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#salaryModal"
                                                            >
                                                                <i className="fas fa-money-bill me-2" />
                                                                Cập nhật lương
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-success"
                                                                href="#"
                                                            >
                                                                <i className="fas fa-user-check me-2" />
                                                                Khôi phục làm việc
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>NV004</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2328A745'/%3E%3Cpath d='M20 22C17.8 22 16 20.2 16 18C16 15.8 17.8 14 20 14C22.2 14 24 15.8 24 18C24 20.2 22.2 22 20 22ZM20 24C24.7 24 28 25.7 28 28V30H12V28C12 25.7 15.3 24 20 24Z' fill='white'/%3E%3C/svg%3E"
                                                        alt="Avatar"
                                                        className="avatar me-2"
                                                    />
                                                    <div>
                                                        <div>Phạm Thị D</div>
                                                        <small className="text-muted">
                                                            d.pham@example.com
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Kế toán</td>
                                            <td>Kế toán viên</td>
                                            <td>05/04/2023</td>
                                            <td>₫ 9,500,000</td>
                                            <td>
                <span className="badge bg-danger">
                  Đã nghỉ việc
                </span>
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        Thao tác
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#employeeDetailModal"
                                                            >
                                                                <i className="fas fa-eye me-2" />
                                                                Xem chi tiết
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
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
                            <div className="tab-pane fade" id="salaryManagement">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5>Quản lý lương - Tháng 3/2025</h5>
                                    <div>
                                        <button className="btn btn-success me-2">
                                            <i className="fas fa-check-circle me-2" />
                                            Phê duyệt bảng lương
                                        </button>
                                        <button className="btn btn-primary">
                                            <i className="fas fa-file-export me-2" />
                                            Xuất báo cáo
                                        </button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Mã NV</th>
                                            <th>Họ tên</th>
                                            <th>Lương cơ bản</th>
                                            <th>Phụ cấp</th>
                                            <th>Thưởng</th>
                                            <th>Khấu trừ</th>
                                            <th>Tổng nhận</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>NV001</td>
                                            <td>Nguyễn Văn A</td>
                                            <td>₫ 15,000,000</td>
                                            <td>₫ 2,000,000</td>
                                            <td>₫ 1,500,000</td>
                                            <td>₫ 1,850,000</td>
                                            <td>₫ 16,650,000</td>
                                            <td>
                                                <span className="badge bg-warning">Chờ duyệt</span>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-icon btn-info me-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#salaryDetailModal"
                                                    title="Chi tiết"
                                                >
                                                    <i className="fas fa-eye" />
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-icon btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#salaryModal"
                                                    title="Chỉnh sửa"
                                                >
                                                    <i className="fas fa-edit" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>NV002</td>
                                            <td>Trần Thị B</td>
                                            <td>₫ 10,000,000</td>
                                            <td>₫ 1,500,000</td>
                                            <td>₫ 1,000,000</td>
                                            <td>₫ 1,250,000</td>
                                            <td>₫ 11,250,000</td>
                                            <td>
                                                <span className="badge bg-warning">Chờ duyệt</span>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-icon btn-info me-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#salaryDetailModal"
                                                    title="Chi tiết"
                                                >
                                                    <i className="fas fa-eye" />
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-icon btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#salaryModal"
                                                    title="Chỉnh sửa"
                                                >
                                                    <i className="fas fa-edit" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>NV003</td>
                                            <td>Lê Văn C</td>
                                            <td>₫ 12,000,000</td>
                                            <td>₫ 1,800,000</td>
                                            <td>₫ 0</td>
                                            <td>₫ 1,380,000</td>
                                            <td>₫ 12,420,000</td>
                                            <td>
                                                <span className="badge bg-warning">Chờ duyệt</span>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-icon btn-info me-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#salaryDetailModal"
                                                    title="Chi tiết"
                                                >
                                                    <i className="fas fa-eye" />
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-icon btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#salaryModal"
                                                    title="Chỉnh sửa"
                                                >
                                                    <i className="fas fa-edit" />
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">Thống kê chi phí nhân sự</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3 mb-3 mb-md-0">
                                                    <div className="border rounded p-3 text-center">
                                                        <h6 className="text-muted">Tổng lương cơ bản</h6>
                                                        <h4>₫ 37,000,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3 mb-md-0">
                                                    <div className="border rounded p-3 text-center">
                                                        <h6 className="text-muted">Tổng phụ cấp</h6>
                                                        <h4>₫ 5,300,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3 mb-md-0">
                                                    <div className="border rounded p-3 text-center">
                                                        <h6 className="text-muted">Tổng thưởng</h6>
                                                        <h4>₫ 2,500,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="border rounded p-3 text-center">
                                                        <h6 className="text-muted">
                                                            Tổng chi phí nhân sự
                                                        </h6>
                                                        <h4>₫ 40,320,000</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="attendanceTracking">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5>Theo dõi chấm công - Tháng 3/2025</h5>
                                    <div>
                                        <button className="btn btn-outline-primary me-2">
                                            <i className="fas fa-file-excel me-2" />
                                            Xuất Excel
                                        </button>
                                        <button className="btn btn-primary">
                                            <i className="fas fa-print me-2" />
                                            In báo cáo
                                        </button>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4 mb-3 mb-md-0">
                                        <select className="form-select">
                                            <option selected="">Tháng 3/2025</option>
                                            <option>Tháng 2/2025</option>
                                            <option>Tháng 1/2025</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mb-3 mb-md-0">
                                        <select className="form-select">
                                            <option selected="">Tất cả phòng ban</option>
                                            <option>Kinh doanh</option>
                                            <option>Marketing</option>
                                            <option>Kỹ thuật</option>
                                            <option>Kế toán</option>
                                            <option>Nhân sự</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Tìm kiếm nhân viên..."
                                            />
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                            >
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th rowSpan={2}>Mã NV</th>
                                            <th rowSpan={2}>Họ tên</th>
                                            <th colSpan={31} className="text-center">
                                                Ngày trong tháng
                                            </th>
                                            <th rowSpan={2}>Tổng</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>11</th>
                                            <th>12</th>
                                            <th>13</th>
                                            <th>14</th>
                                            <th>15</th>
                                            <th>16</th>
                                            <th>17</th>
                                            <th>18</th>
                                            <th>19</th>
                                            <th>20</th>
                                            <th>21</th>
                                            <th>22</th>
                                            <th>23</th>
                                            <th>24</th>
                                            <th>25</th>
                                            <th>26</th>
                                            <th>27</th>
                                            <th>28</th>
                                            <th>29</th>
                                            <th>30</th>
                                            <th>31</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>NV001</td>
                                            <td>Nguyễn Văn A</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-danger text-white text-center">
                                                P
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-warning text-white text-center">
                                                0.5
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td>21.5</td>
                                        </tr>
                                        <tr>
                                            <td>NV002</td>
                                            <td>Trần Thị B</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-danger text-white text-center">
                                                P
                                            </td>
                                            <td className="bg-danger text-white text-center">
                                                P
                                            </td>
                                            <td className="bg-danger text-white text-center">
                                                P
                                            </td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-light text-center">N</td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td className="bg-success text-white text-center">
                                                1
                                            </td>
                                            <td>19.0</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3">
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <span className="badge bg-success">1</span> - Làm việc
                                            đủ công
                                        </div>
                                        <div className="me-3">
                                            <span className="badge bg-warning">0.5</span> - Làm việc
                                            nửa ngày
                                        </div>
                                        <div className="me-3">
                                            <span className="badge bg-danger">P</span> - Nghỉ phép
                                        </div>
                                        <div className="me-3">
                                            <span className="badge bg-light text-dark">N</span> -
                                            Ngày nghỉ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  export default App;