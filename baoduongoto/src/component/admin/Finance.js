import React from "react";

const Finance = () => {

    return (
        <div id="finance" className="page-content">
            <h2 className="mb-4" data-aos="fade-right">
                Quản lý tài chính
            </h2>
            <div className="row">
                <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="card bg-gradient-primary text-white">
                        <div className="card-body p-4">
                            <h5>Tổng doanh thu</h5>
                            <h2 className="display-5 fw-bold">₫ 850M</h2>
                            <p>
                                <i className="fas fa-arrow-up me-1" />
                                8% so với quý trước
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={200}>
                    <div className="card bg-gradient-success text-white">
                        <div className="card-body p-4">
                            <h5>Tổng chi phí</h5>
                            <h2 className="display-5 fw-bold">₫ 520M</h2>
                            <p>
                                <i className="fas fa-arrow-up me-1" />
                                5% so với quý trước
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={300}>
                    <div className="card bg-gradient-info text-white">
                        <div className="card-body p-4">
                            <h5>Lợi nhuận</h5>
                            <h2 className="display-5 fw-bold">₫ 330M</h2>
                            <p>
                                <i className="fas fa-arrow-up me-1" />
                                12% so với quý trước
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={400}>
                    <div className="card bg-gradient-warning text-white">
                        <div className="card-body p-4">
                            <h5>Công nợ</h5>
                            <h2 className="display-5 fw-bold">₫ 120M</h2>
                            <p>
                                <i className="fas fa-arrow-down me-1" />
                                3% so với quý trước
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mb-4" data-aos="fade-up">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Phân tích tài chính</h5>
                            <div className="btn-group">
                                <button className="btn btn-sm btn-outline-primary active">
                                    Tháng
                                </button>
                                <button className="btn btn-sm btn-outline-primary">Quý</button>
                                <button className="btn btn-sm btn-outline-primary">Năm</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="financeChart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Cơ cấu chi phí</h5>
                        </div>
                        <div className="card-body">
                            <div className="chart-container" style={{ height: 200 }}>
                                <canvas id="expensesChart" />
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Chi phí nhân sự</span>
                                    <span>42%</span>
                                </div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "42%" }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Chi phí nguyên vật liệu</span>
                                    <span>28%</span>
                                </div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: "28%" }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Chi phí vận hành</span>
                                    <span>18%</span>
                                </div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-info"
                                        style={{ width: "18%" }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Chi phí marketing</span>
                                    <span>12%</span>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        style={{ width: "12%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4" data-aos="fade-up">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Giao dịch gần đây</h5>
                            <button
                                className="btn btn-sm btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#transactionModal"
                            >
                                <i className="fas fa-plus me-2" />
                                Thêm giao dịch
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Mã GD</th>
                                        <th>Ngày</th>
                                        <th>Mô tả</th>
                                        <th>Loại</th>
                                        <th>Số tiền</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>TRX5723</td>
                                        <td>24/03/2025</td>
                                        <td>Thanh toán đơn hàng #ORD5723</td>
                                        <td>
                                            <span className="badge bg-success">Thu</span>
                                        </td>
                                        <td className="text-success">+₫ 1,250,000</td>
                                    </tr>
                                    <tr>
                                        <td>TRX5722</td>
                                        <td>23/03/2025</td>
                                        <td>Thanh toán lương nhân viên</td>
                                        <td>
                                            <span className="badge bg-danger">Chi</span>
                                        </td>
                                        <td className="text-danger">-₫ 45,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>TRX5721</td>
                                        <td>22/03/2025</td>
                                        <td>Thanh toán đơn hàng #ORD5721</td>
                                        <td>
                                            <span className="badge bg-success">Thu</span>
                                        </td>
                                        <td className="text-success">+₫ 750,000</td>
                                    </tr>
                                    <tr>
                                        <td>TRX5720</td>
                                        <td>21/03/2025</td>
                                        <td>Thanh toán tiền mặt bằng</td>
                                        <td>
                                            <span className="badge bg-danger">Chi</span>
                                        </td>
                                        <td className="text-danger">-₫ 25,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>TRX5719</td>
                                        <td>21/03/2025</td>
                                        <td>Thanh toán tiền điện, nước</td>
                                        <td>
                                            <span className="badge bg-danger">Chi</span>
                                        </td>
                                        <td className="text-danger">-₫ 3,500,000</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center mt-3">
                                <a href="#" className="btn btn-outline-primary">
                                    Xem tất cả giao dịch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Quản lý hoá đơn</h5>
                            <button
                                className="btn btn-sm btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#invoiceModal"
                            >
                                <i className="fas fa-plus me-2" />
                                Tạo hoá đơn
                            </button>
                        </div>
                        <div className="card-body">
                            <ul className="nav nav-tabs mb-3">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="#unpaidInvoices"
                                        data-bs-toggle="tab"
                                    >
                                        Chưa thanh toán
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#paidInvoices"
                                        data-bs-toggle="tab"
                                    >
                                        Đã thanh toán
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="unpaidInvoices">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Mã HĐ</th>
                                                <th>Khách hàng</th>
                                                <th>Ngày tạo</th>
                                                <th>Hạn thanh toán</th>
                                                <th>Số tiền</th>
                                                <th>Thao tác</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>INV6723</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>20/03/2025</td>
                                                <td>30/03/2025</td>
                                                <td>₫ 2,500,000</td>
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
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-eye me-2" />
                                                                    Xem chi tiết
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-file-pdf me-2" />
                                                                    Xuất PDF
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-envelope me-2" />
                                                                    Gửi email
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item text-success"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-check-circle me-2" />
                                                                    Đánh dấu đã thanh toán
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>INV6720</td>
                                                <td>Trần Thị B</td>
                                                <td>18/03/2025</td>
                                                <td>28/03/2025</td>
                                                <td>₫ 1,800,000</td>
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
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-eye me-2" />
                                                                    Xem chi tiết
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-file-pdf me-2" />
                                                                    Xuất PDF
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-envelope me-2" />
                                                                    Gửi email
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item text-success"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-check-circle me-2" />
                                                                    Đánh dấu đã thanh toán
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>INV6718</td>
                                                <td>Lê Văn C</td>
                                                <td>15/03/2025</td>
                                                <td>25/03/2025</td>
                                                <td>₫ 3,200,000</td>
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
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-eye me-2" />
                                                                    Xem chi tiết
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-file-pdf me-2" />
                                                                    Xuất PDF
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-envelope me-2" />
                                                                    Gửi email
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item text-success"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-check-circle me-2" />
                                                                    Đánh dấu đã thanh toán
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="paidInvoices">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Mã HĐ</th>
                                                <th>Khách hàng</th>
                                                <th>Ngày tạo</th>
                                                <th>Ngày thanh toán</th>
                                                <th>Số tiền</th>
                                                <th>Thao tác</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>INV6715</td>
                                                <td>Phạm Thị D</td>
                                                <td>10/03/2025</td>
                                                <td>15/03/2025</td>
                                                <td>₫ 1,750,000</td>
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
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-eye me-2" />
                                                                    Xem chi tiết
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-file-pdf me-2" />
                                                                    Xuất PDF
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>INV6710</td>
                                                <td>Hoàng Văn E</td>
                                                <td>05/03/2025</td>
                                                <td>12/03/2025</td>
                                                <td>₫ 2,100,000</td>
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
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-eye me-2" />
                                                                    Xem chi tiết
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-file-pdf me-2" />
                                                                    Xuất PDF
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
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
            </div>
            <div className="row">
                <div className="col-12 mb-4" data-aos="fade-up">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Lập ngân sách và dự báo</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Danh mục</th>
                                        <th>Ngân sách</th>
                                        <th>Đã chi</th>
                                        <th>Còn lại</th>
                                        <th>% Sử dụng</th>
                                        <th>Dự báo cuối kỳ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Chi phí nhân sự</td>
                                        <td>₫ 250,000,000</td>
                                        <td>₫ 175,000,000</td>
                                        <td>₫ 75,000,000</td>
                                        <td>
                                            <div className="progress" style={{ height: 8 }}>
                                                <div
                                                    className="progress-bar bg-success"
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                            <span className="small">70%</span>
                                        </td>
                                        <td>₫ 245,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Chi phí nguyên vật liệu</td>
                                        <td>₫ 180,000,000</td>
                                        <td>₫ 145,000,000</td>
                                        <td>₫ 35,000,000</td>
                                        <td>
                                            <div className="progress" style={{ height: 8 }}>
                                                <div
                                                    className="progress-bar bg-warning"
                                                    style={{ width: "80%" }}
                                                />
                                            </div>
                                            <span className="small">80%</span>
                                        </td>
                                        <td>₫ 190,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Chi phí vận hành</td>
                                        <td>₫ 120,000,000</td>
                                        <td>₫ 80,000,000</td>
                                        <td>₫ 40,000,000</td>
                                        <td>
                                            <div className="progress" style={{ height: 8 }}>
                                                <div
                                                    className="progress-bar bg-success"
                                                    style={{ width: "67%" }}
                                                />
                                            </div>
                                            <span className="small">67%</span>
                                        </td>
                                        <td>₫ 115,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Chi phí marketing</td>
                                        <td>₫ 80,000,000</td>
                                        <td>₫ 65,000,000</td>
                                        <td>₫ 15,000,000</td>
                                        <td>
                                            <div className="progress" style={{ height: 8 }}>
                                                <div
                                                    className="progress-bar bg-danger"
                                                    style={{ width: "81%" }}
                                                />
                                            </div>
                                            <span className="small">81%</span>
                                        </td>
                                        <td>₫ 85,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Chi phí khác</td>
                                        <td>₫ 50,000,000</td>
                                        <td>₫ 30,000,000</td>
                                        <td>₫ 20,000,000</td>
                                        <td>
                                            <div className="progress" style={{ height: 8 }}>
                                                <div
                                                    className="progress-bar bg-success"
                                                    style={{ width: "60%" }}
                                                />
                                            </div>
                                            <span className="small">60%</span>
                                        </td>
                                        <td>₫ 45,000,000</td>
                                    </tr>
                                    </tbody>
                                    <tfoot className="table-group-divider">
                                    <tr className="fw-bold">
                                        <td>Tổng cộng</td>
                                        <td>₫ 680,000,000</td>
                                        <td>₫ 495,000,000</td>
                                        <td>₫ 185,000,000</td>
                                        <td>
                                            <div className="progress" style={{ height: 8 }}>
                                                <div
                                                    className="progress-bar bg-primary"
                                                    style={{ width: "73%" }}
                                                />
                                            </div>
                                            <span className="small">73%</span>
                                        </td>
                                        <td>₫ 680,000,000</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Finance;
