import React from "react";

const SalesReports = () => {


    return (
        <div id="reports" className="page-content">
            <h2 className="mb-4" data-aos="fade-right">
                Báo cáo bán hàng
            </h2>
            <div className="row">
                <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="card">
                        <div className="card-body text-center p-4">
                            <h5>Doanh thu tháng này</h5>
                            <h1 className="display-4 fw-bold text-primary mt-3">₫ 285M</h1>
                            <p className="text-success">
                                <i className="fas fa-arrow-up me-1" />
                                8% so với tháng trước
                            </p>
                            <hr />
                            <div className="row text-start mt-3">
                                <div className="col-6">
                                    <p className="mb-0 text-muted">Tháng trước</p>
                                    <h5>₫ 264M</h5>
                                </div>
                                <div className="col-6 text-end">
                                    <p className="mb-0 text-muted">Dự kiến tháng sau</p>
                                    <h5>₫ 302M</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={200}>
                    <div className="card">
                        <div className="card-body text-center p-4">
                            <h5>Đơn hàng tháng này</h5>
                            <h1 className="display-4 fw-bold text-info mt-3">1,286</h1>
                            <p className="text-success">
                                <i className="fas fa-arrow-up me-1" />
                                12% so với tháng trước
                            </p>
                            <hr />
                            <div className="row text-start mt-3">
                                <div className="col-6">
                                    <p className="mb-0 text-muted">Hoàn thành</p>
                                    <h5>1,125</h5>
                                </div>
                                <div className="col-6 text-end">
                                    <p className="mb-0 text-muted">Hủy</p>
                                    <h5>42</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={300}>
                    <div className="card">
                        <div className="card-body text-center p-4">
                            <h5>Khách hàng mới</h5>
                            <h1 className="display-4 fw-bold text-success mt-3">347</h1>
                            <p className="text-success">
                                <i className="fas fa-arrow-up me-1" />
                                5% so với tháng trước
                            </p>
                            <hr />
                            <div className="row text-start mt-3">
                                <div className="col-6">
                                    <p className="mb-0 text-muted">Tháng trước</p>
                                    <h5>331</h5>
                                </div>
                                <div className="col-6 text-end">
                                    <p className="mb-0 text-muted">Tổng</p>
                                    <h5>5,382</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mb-4" data-aos="fade-up">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Doanh thu theo thời gian</h5>
                            <div>
                                <button className="btn btn-sm btn-outline-primary me-2">
                                    Ngày
                                </button>
                                <button className="btn btn-sm btn-primary me-2">Tháng</button>
                                <button className="btn btn-sm btn-outline-primary">Năm</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="salesChart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Tỷ lệ theo kênh bán hàng</h5>
                        </div>
                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="channelsChart" />
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Website</span>
                                    <span>42%</span>
                                </div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "42%" }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>App di động</span>
                                    <span>30%</span>
                                </div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: "30%" }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Cửa hàng</span>
                                    <span>18%</span>
                                </div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-info"
                                        style={{ width: "18%" }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Khác</span>
                                    <span>10%</span>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        style={{ width: "10%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-4" data-aos="fade-up">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Top sản phẩm bán chạy</h5>
                            <select
                                className="form-select form-select-sm"
                                style={{ width: "auto" }}
                            >
                                <option selected="">Tháng này</option>
                                <option>Quý này</option>
                                <option>Năm nay</option>
                                <option>Tất cả thời gian</option>
                            </select>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Danh mục</th>
                                        <th>Đã bán</th>
                                        <th>Doanh thu</th>
                                        <th>Đánh giá</th>
                                        <th>Tồn kho</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Sản phẩm A</td>
                                        <td>Danh mục 1</td>
                                        <td>524</td>
                                        <td>₫ 52,400,000</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2">4.8</span>
                                                <div>
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star-half-alt text-warning" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>235</td>
                                        <td>
                                            <span className="badge bg-success">Còn hàng</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sản phẩm B</td>
                                        <td>Danh mục 2</td>
                                        <td>382</td>
                                        <td>₫ 38,200,000</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2">4.5</span>
                                                <div>
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star-half-alt text-warning" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>178</td>
                                        <td>
                                            <span className="badge bg-success">Còn hàng</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sản phẩm C</td>
                                        <td>Danh mục 3</td>
                                        <td>297</td>
                                        <td>₫ 29,700,000</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2">4.2</span>
                                                <div>
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="far fa-star text-warning" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td>
                                            <span className="badge bg-warning">Sắp hết</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sản phẩm D</td>
                                        <td>Danh mục 2</td>
                                        <td>243</td>
                                        <td>₫ 24,300,000</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2">4.7</span>
                                                <div>
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star-half-alt text-warning" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>
                                            <span className="badge bg-danger">Hết hàng</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sản phẩm E</td>
                                        <td>Danh mục 1</td>
                                        <td>198</td>
                                        <td>₫ 19,800,000</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2">4.0</span>
                                                <div>
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="fas fa-star text-warning" />
                                                    <i className="far fa-star text-warning" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>56</td>
                                        <td>
                                            <span className="badge bg-success">Còn hàng</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-outline-primary me-2">
                    <i className="fas fa-file-excel me-2" />
                    Xuất Excel
                </button>
                <button className="btn btn-outline-danger me-2">
                    <i className="fas fa-file-pdf me-2" />
                    Xuất PDF
                </button>
                <button className="btn btn-primary">
                    <i className="fas fa-print me-2" />
                    In báo cáo
                </button>
            </div>
        </div>
    );
};
export default SalesReports;

