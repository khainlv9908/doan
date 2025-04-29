import React from "react";

const Inventory = () => {


    return (
        <div id="inventory" className="page-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 data-aos="fade-right">Kiểm soát hàng hóa</h2>
                <div data-aos="fade-left">
                    <button
                        className="btn btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                    >
                        <i className="fas fa-plus-circle me-2" />
                        Thêm sản phẩm mới
                    </button>
                    <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#importModal"
                    >
                        <i className="fas fa-file-import me-2" />
                        Nhập hàng
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-4" data-aos="fade-up">
                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="#productsList"
                                        data-bs-toggle="tab"
                                    >
                                        Danh sách sản phẩm
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#inventory-report"
                                        data-bs-toggle="tab"
                                    >
                                        Báo cáo tồn kho
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#transactions"
                                        data-bs-toggle="tab"
                                    >
                                        Lịch sử giao dịch
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="productsList">
                                    <div className="row mb-3">
                                        <div className="col-md-3 mb-3 mb-md-0">
                                            <select className="form-select">
                                                <option selected="">Danh mục</option>
                                                <option>Danh mục A</option>
                                                <option>Danh mục B</option>
                                                <option>Danh mục C</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-3 mb-md-0">
                                            <select className="form-select">
                                                <option selected="">Trạng thái</option>
                                                <option>Còn hàng</option>
                                                <option>Sắp hết</option>
                                                <option>Hết hàng</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Tìm kiếm sản phẩm..."
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
                                                <th>Mã SP</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Danh mục</th>
                                                <th>Giá bán</th>
                                                <th>Tồn kho</th>
                                                <th>Đã bán</th>
                                                <th>Trạng thái</th>
                                                <th>Thao tác</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>SP001</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-light rounded p-2 me-2">
                                                            <i className="fas fa-box text-primary" />
                                                        </div>
                                                        <div>
                                                            <div>Sản phẩm A</div>
                                                            <small className="text-muted">
                                                                SKU: A123456
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Danh mục A</td>
                                                <td>₫ 150,000</td>
                                                <td>120</td>
                                                <td>250</td>
                                                <td>
                                                    <span className="badge bg-success">Còn hàng</span>
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
                                                                    data-bs-target="#productDetailModal"
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
                                                                    data-bs-target="#productModal"
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
                                                                    data-bs-target="#importModal"
                                                                >
                                                                    <i className="fas fa-plus-circle me-2" />
                                                                    Nhập thêm
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
                                                                    <i className="fas fa-trash me-2" />
                                                                    Xóa
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>SP002</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-light rounded p-2 me-2">
                                                            <i className="fas fa-box text-primary" />
                                                        </div>
                                                        <div>
                                                            <div>Sản phẩm B</div>
                                                            <small className="text-muted">
                                                                SKU: B123456
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Danh mục B</td>
                                                <td>₫ 250,000</td>
                                                <td>45</td>
                                                <td>180</td>
                                                <td>
                                                    <span className="badge bg-success">Còn hàng</span>
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
                                                                    data-bs-target="#productDetailModal"
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
                                                                    data-bs-target="#productModal"
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
                                                                    data-bs-target="#importModal"
                                                                >
                                                                    <i className="fas fa-plus-circle me-2" />
                                                                    Nhập thêm
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
                                                                    <i className="fas fa-trash me-2" />
                                                                    Xóa
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>SP003</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-light rounded p-2 me-2">
                                                            <i className="fas fa-box text-primary" />
                                                        </div>
                                                        <div>
                                                            <div>Sản phẩm C</div>
                                                            <small className="text-muted">
                                                                SKU: C123456
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Danh mục B</td>
                                                <td>₫ 180,000</td>
                                                <td>8</td>
                                                <td>95</td>
                                                <td>
                                                    <span className="badge bg-warning">Sắp hết</span>
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
                                                                    data-bs-target="#productDetailModal"
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
                                                                    data-bs-target="#productModal"
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
                                                                    data-bs-target="#importModal"
                                                                >
                                                                    <i className="fas fa-plus-circle me-2" />
                                                                    Nhập thêm
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
                                                                    <i className="fas fa-trash me-2" />
                                                                    Xóa
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>SP004</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-light rounded p-2 me-2">
                                                            <i className="fas fa-box text-primary" />
                                                        </div>
                                                        <div>
                                                            <div>Sản phẩm D</div>
                                                            <small className="text-muted">
                                                                SKU: D123456
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Danh mục C</td>
                                                <td>₫ 320,000</td>
                                                <td>0</td>
                                                <td>65</td>
                                                <td>
                                                    <span className="badge bg-danger">Hết hàng</span>
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
                                                                    data-bs-target="#productDetailModal"
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
                                                                    data-bs-target="#productModal"
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
                                                                    data-bs-target="#importModal"
                                                                >
                                                                    <i className="fas fa-plus-circle me-2" />
                                                                    Nhập thêm
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
                                                                    <i className="fas fa-trash me-2" />
                                                                    Xóa
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
                                <div className="tab-pane fade" id="inventory-report">
                                    <div className="row mb-4">
                                        <div className="col-md-3 mb-4">
                                            <div className="card bg-success text-white">
                                                <div className="card-body">
                                                    <h6>Tổng sản phẩm</h6>
                                                    <h2>428</h2>
                                                    <div className="mt-2 small">
                                                        <i className="fas fa-arrow-up me-1" />
                                                        <span>5% so với tháng trước</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card bg-primary text-white">
                                                <div className="card-body">
                                                    <h6>Tổng giá trị tồn kho</h6>
                                                    <h2>₫ 520M</h2>
                                                    <div className="mt-2 small">
                                                        <i className="fas fa-arrow-up me-1" />
                                                        <span>3% so với tháng trước</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card bg-warning text-white">
                                                <div className="card-body">
                                                    <h6>Sản phẩm sắp hết</h6>
                                                    <h2>24</h2>
                                                    <div className="mt-2 small">
                                                        <i className="fas fa-arrow-up me-1" />
                                                        <span>2 so với tuần trước</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card bg-danger text-white">
                                                <div className="card-body">
                                                    <h6>Sản phẩm hết hàng</h6>
                                                    <h2>8</h2>
                                                    <div className="mt-2 small">
                                                        <i className="fas fa-arrow-down me-1" />
                                                        <span>1 so với tuần trước</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">
                                                        Phân tích tồn kho theo danh mục
                                                    </h5>
                                                </div>
                                                <div className="card-body">
                                                    <div
                                                        className="chart-container"
                                                        style={{ height: 300 }}
                                                    >
                                                        <canvas id="inventoryCategoryChart" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">Xu hướng tồn kho</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div
                                                        className="chart-container"
                                                        style={{ height: 300 }}
                                                    >
                                                        <canvas id="inventoryTrendChart" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">Sản phẩm sắp hết hàng</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover">
                                                            <thead>
                                                            <tr>
                                                                <th>Mã SP</th>
                                                                <th>Tên sản phẩm</th>
                                                                <th>Danh mục</th>
                                                                <th>Tồn kho</th>
                                                                <th>Ngưỡng cảnh báo</th>
                                                                <th>Đã bán (30 ngày)</th>
                                                                <th>Thời gian hết hàng dự kiến</th>
                                                                <th>Thao tác</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>SP003</td>
                                                                <td>Sản phẩm C</td>
                                                                <td>Danh mục B</td>
                                                                <td>8</td>
                                                                <td>10</td>
                                                                <td>32</td>
                                                                <td>7 ngày</td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-sm btn-success"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#importModal"
                                                                    >
                                                                        <i className="fas fa-plus-circle me-1" />
                                                                        Nhập thêm
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>SP005</td>
                                                                <td>Sản phẩm E</td>
                                                                <td>Danh mục A</td>
                                                                <td>12</td>
                                                                <td>15</td>
                                                                <td>25</td>
                                                                <td>14 ngày</td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-sm btn-success"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#importModal"
                                                                    >
                                                                        <i className="fas fa-plus-circle me-1" />
                                                                        Nhập thêm
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>SP008</td>
                                                                <td>Sản phẩm H</td>
                                                                <td>Danh mục C</td>
                                                                <td>5</td>
                                                                <td>10</td>
                                                                <td>15</td>
                                                                <td>10 ngày</td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-sm btn-success"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#importModal"
                                                                    >
                                                                        <i className="fas fa-plus-circle me-1" />
                                                                        Nhập thêm
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="transactions">
                                    <div className="row mb-3">
                                        <div className="col-md-3 mb-3 mb-md-0">
                                            <select className="form-select">
                                                <option selected="">Loại giao dịch</option>
                                                <option>Nhập kho</option>
                                                <option>Xuất kho</option>
                                                <option>Điều chỉnh</option>
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
                                                    placeholder="Tìm kiếm giao dịch..."
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
                                                <th>Mã GD</th>
                                                <th>Ngày</th>
                                                <th>Sản phẩm</th>
                                                <th>Loại</th>
                                                <th>Số lượng</th>
                                                <th>Người thực hiện</th>
                                                <th>Ghi chú</th>
                                                <th>Thao tác</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>GD5723</td>
                                                <td>24/03/2025</td>
                                                <td>Sản phẩm A</td>
                                                <td>
                                                    <span className="badge bg-success">Nhập kho</span>
                                                </td>
                                                <td>+50</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>Nhập hàng theo đơn PO123</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#transactionDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>GD5722</td>
                                                <td>23/03/2025</td>
                                                <td>Sản phẩm B</td>
                                                <td>
                                                    <span className="badge bg-danger">Xuất kho</span>
                                                </td>
                                                <td>-10</td>
                                                <td>Trần Thị B</td>
                                                <td>Xuất theo đơn hàng #ORD5722</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#transactionDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>GD5721</td>
                                                <td>22/03/2025</td>
                                                <td>Sản phẩm D</td>
                                                <td>
                                                    <span className="badge bg-success">Nhập kho</span>
                                                </td>
                                                <td>+25</td>
                                                <td>Lê Văn C</td>
                                                <td>Nhập hàng theo đơn PO124</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#transactionDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>GD5720</td>
                                                <td>21/03/2025</td>
                                                <td>Sản phẩm C</td>
                                                <td>
                                                    <span className="badge bg-warning">Điều chỉnh</span>
                                                </td>
                                                <td>-2</td>
                                                <td>Phạm Thị D</td>
                                                <td>Điều chỉnh do hàng lỗi</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#transactionDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
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
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Inventory;
