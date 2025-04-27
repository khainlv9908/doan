import React from "react";

const RoutesAdmin = () => {


    return (
        <div id="maintenance" className="page-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 data-aos="fade-right">Nhập thông tin bảo dưỡng ô tô</h2>
                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#maintenanceModal"
                    data-aos="fade-left"
                >
                    <i className="fas fa-plus-circle me-2" />
                    Thêm lịch bảo dưỡng mới
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
                                        href="#maintenanceList"
                                        data-bs-toggle="tab"
                                    >
                                        Danh sách bảo dưỡng
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#maintenanceDetails"
                                        data-bs-toggle="tab"
                                    >
                                        Chi tiết bảo dưỡng
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#maintenanceReports"
                                        data-bs-toggle="tab"
                                    >
                                        Báo cáo bảo dưỡng
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="maintenanceList">
                                    <div className="row mb-3">
                                        <div className="col-md-3 mb-3 mb-md-0">
                                            <select className="form-select">
                                                <option selected="">Loại dịch vụ</option>
                                                <option>Bảo dưỡng định kỳ</option>
                                                <option>Sửa chữa</option>
                                                <option>Thay thế phụ tùng</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-3 mb-md-0">
                                            <select className="form-select">
                                                <option selected="">Trạng thái</option>
                                                <option>Đang thực hiện</option>
                                                <option>Hoàn thành</option>
                                                <option>Tạm ngưng</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Tìm kiếm lịch bảo dưỡng..."
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
                                                <th>Mã bảo dưỡng</th>
                                                <th>Tên dịch vụ</th>
                                                <th>Ngày bảo dưỡng</th>
                                                <th>Thời gian</th>
                                                <th>Chi phí</th>
                                                <th>Trạng thái</th>
                                                <th>Thao tác</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>M001</td>
                                                <td>Bảo dưỡng định kỳ</td>
                                                <td>15/03/2025</td>
                                                <td>2 giờ</td>
                                                <td>₫ 500,000</td>
                                                <td>
                                                <span className="badge bg-success">
                                                    Hoàn thành
                                                </span>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#maintenanceDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-primary me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#maintenanceModal"
                                                        title="Chỉnh sửa"
                                                    >
                                                        <i className="fas fa-edit" />
                                                    </button>
                                                    <div className="btn-group dropstart">
                                                        <button
                                                            className="btn btn-sm btn-icon btn-secondary"
                                                            data-bs-toggle="dropdown"
                                                            title="Thao tác khác"
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-pause-circle me-2" />
                                                                    Tạm ngưng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-trash me-2" />
                                                                    Xóa
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>M002</td>
                                                <td>Thay dầu máy</td>
                                                <td>10/03/2025</td>
                                                <td>1 giờ</td>
                                                <td>₫ 300,000</td>
                                                <td>
                                                <span className="badge bg-success">
                                                    Hoàn thành
                                                </span>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#maintenanceDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-primary me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#maintenanceModal"
                                                        title="Chỉnh sửa"
                                                    >
                                                        <i className="fas fa-edit" />
                                                    </button>
                                                    <div className="btn-group dropstart">
                                                        <button
                                                            className="btn btn-sm btn-icon btn-secondary"
                                                            data-bs-toggle="dropdown"
                                                            title="Thao tác khác"
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-pause-circle me-2" />
                                                                    Tạm ngưng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-trash me-2" />
                                                                    Xóa
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>M003</td>
                                                <td>Sửa chữa hệ thống phanh</td>
                                                <td>05/03/2025</td>
                                                <td>3 giờ</td>
                                                <td>₫ 1,200,000</td>
                                                <td>
                                                    <span className="badge bg-warning">Tạm ngưng</span>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-info me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#maintenanceDetailModal"
                                                        title="Xem chi tiết"
                                                    >
                                                        <i className="fas fa-eye" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-primary me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#maintenanceModal"
                                                        title="Chỉnh sửa"
                                                    >
                                                        <i className="fas fa-edit" />
                                                    </button>
                                                    <div className="btn-group dropstart">
                                                        <button
                                                            className="btn btn-sm btn-icon btn-secondary"
                                                            data-bs-toggle="dropdown"
                                                            title="Thao tác khác"
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fas fa-play-circle me-2" />
                                                                    Mở lại
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
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
                                                    Sau
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="tab-pane fade" id="maintenanceDetails">
                                    <div className="alert alert-info mb-4">
                                        <i className="fas fa-info-circle me-2" />
                                        Xem và quản lý các thông tin bảo dưỡng ô tô
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4 mb-3 mb-md-0">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h6 className="mb-0">Danh sách dịch vụ</h6>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="list-group list-group-flush">
                                                        <a
                                                            href="#"
                                                            className="list-group-item list-group-item-action active"
                                                        >
                                                            <div className="d-flex w-100 justify-content-between">
                                                                <h6 className="mb-1">
                                                                    Bảo dưỡng định kỳ
                                                                </h6>
                                                                <small>₫ 500,000</small>
                                                            </div>
                                                            <p className="mb-1 small">
                                                                Ngày bảo dưỡng: 15/03/2025
                                                            </p>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="list-group-item list-group-item-action"
                                                        >
                                                            <div className="d-flex w-100 justify-content-between">
                                                                <h6 className="mb-1">
                                                                    Thay dầu máy
                                                                </h6>
                                                                <small>₫ 300,000</small>
                                                            </div>
                                                            <p className="mb-1 small">
                                                                Ngày bảo dưỡng: 10/03/2025
                                                            </p>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="list-group-item list-group-item-action"
                                                        >
                                                            <div className="d-flex w-100 justify-content-between">
                                                                <h6 className="mb-1">
                                                                    Sửa chữa hệ thống phanh
                                                                </h6>
                                                                <small>₫ 1,200,000</small>
                                                            </div>
                                                            <p className="mb-1 small">
                                                                Ngày bảo dưỡng: 05/03/2025
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h6 className="mb-0">Chi tiết dịch vụ</h6>
                                                </div>
                                                <div className="card-body">
                                                    <h5>Bảo dưỡng định kỳ</h5>
                                                    <div className="row mt-3">
                                                        <div className="col-md-6">
                                                            <p>
                                                                <strong>Ngày bảo dưỡng:</strong> 15/03/2025
                                                            </p>
                                                            <p>
                                                                <strong>Thời gian:</strong> 2 giờ
                                                            </p>
                                                            <p>
                                                                <strong>Chi phí:</strong> ₫ 500,000
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>
                                                                <strong>Trạng thái:</strong>
                                                                <span className="badge bg-success">
                                                            Hoàn thành
                                                        </span>
                                                            </p>
                                                            <p>
                                                                <strong>Ngày cập nhật:</strong> 16/03/2025
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <h6>Các điểm cần lưu ý</h6>
                                                    <ol className="list-group list-group-numbered mt-2">
                                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">
                                                                <div className="fw-bold">Kiểm tra dầu máy</div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">
                                                                <div className="fw-bold">Kiểm tra hệ thống phanh</div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">
                                                                <div className="fw-bold">Kiểm tra lốp</div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="maintenanceReports">
                                    <div className="alert alert-info mb-4">
                                        <i className="fas fa-lightbulb me-2" />
                                        Báo cáo bảo dưỡng giúp theo dõi hiệu quả và chi phí bảo dưỡng.
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">Báo cáo hiệu quả bảo dưỡng</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                            <tr>
                                                                <th>Dịch vụ</th>
                                                                <th>Thời gian</th>
                                                                <th>Chi phí</th>
                                                                <th>Trạng thái</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>Bảo dưỡng định kỳ</td>
                                                                <td>2 giờ</td>
                                                                <td>₫ 500,000</td>
                                                                <td>
                                                                    <span className="badge bg-success">Hoàn thành</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Thay dầu máy</td>
                                                                <td>1 giờ</td>
                                                                <td>₫ 300,000</td>
                                                                <td>
                                                                    <span className="badge bg-success">Hoàn thành</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sửa chữa hệ thống phanh</td>
                                                                <td>3 giờ</td>
                                                                <td>₫ 1,200,000</td>
                                                                <td>
                                                                    <span className="badge bg-warning">Tạm ngưng</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RoutesAdmin;
