import React from "react";

const Orders = () => {

    return (
        <div id="orders" className="page-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 data-aos="fade-right">Quản lý đơn đặt hàng</h2>
                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#orderModal"
                    data-aos="fade-left"
                >
                    <i className="fas fa-plus-circle me-2" />
                    Tạo đơn hàng mới
                </button>
            </div>
            <div className="card mb-4" data-aos="fade-up">
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <select className="form-select">
                                <option selected="">Trạng thái</option>
                                <option>Chờ xác nhận</option>
                                <option>Đang xử lý</option>
                                <option>Đang giao</option>
                                <option>Hoàn thành</option>
                                <option>Đã hủy</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm theo mã đơn, tên khách hàng..."
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
                                <th>Mã đơn</th>
                                <th>Khách hàng</th>
                                <th>Ngày đặt</th>
                                <th>Tổng tiền</th>
                                <th>Thanh toán</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#ORD5723</td>
                                <td>Nguyễn Văn A</td>
                                <td>24/03/2025</td>
                                <td>₫ 1,250,000</td>
                                <td>
                                    <span className="badge bg-success">Đã thanh toán</span>
                                </td>
                                <td>
                                    <span className="badge bg-info">Đang giao</span>
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
                                                    data-bs-target="#orderDetailModal"
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
                                                    data-bs-target="#orderModal"
                                                >
                                                    <i className="fas fa-edit me-2" />
                                                    Chỉnh sửa
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#">
                                                    <i className="fas fa-trash me-2" />
                                                    Hủy đơn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#ORD5722</td>
                                <td>Trần Thị B</td>
                                <td>23/03/2025</td>
                                <td>₫ 2,340,000</td>
                                <td>
                                    <span className="badge bg-success">Đã thanh toán</span>
                                </td>
                                <td>
                                    <span className="badge bg-warning">Đang xử lý</span>
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
                                                    data-bs-target="#orderDetailModal"
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
                                                    data-bs-target="#orderModal"
                                                >
                                                    <i className="fas fa-edit me-2" />
                                                    Chỉnh sửa
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#">
                                                    <i className="fas fa-trash me-2" />
                                                    Hủy đơn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#ORD5721</td>
                                <td>Lê Văn C</td>
                                <td>22/03/2025</td>
                                <td>₫ 750,000</td>
                                <td>
                                    <span className="badge bg-warning">Chưa thanh toán</span>
                                </td>
                                <td>
                                    <span className="badge bg-primary">Chờ xác nhận</span>
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
                                                    data-bs-target="#orderDetailModal"
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
                                                    data-bs-target="#orderModal"
                                                >
                                                    <i className="fas fa-edit me-2" />
                                                    Chỉnh sửa
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#">
                                                    <i className="fas fa-trash me-2" />
                                                    Hủy đơn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#ORD5720</td>
                                <td>Phạm Thị D</td>
                                <td>21/03/2025</td>
                                <td>₫ 890,000</td>
                                <td>
                                    <span className="badge bg-danger">Hoàn tiền</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger">Đã hủy</span>
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
                                                    data-bs-target="#orderDetailModal"
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
            </div>
        </div>
    );
};
export default Orders;
