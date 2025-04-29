import React, {useState, useEffect, useRef} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./admin.css";
import Chart from "chart.js/auto";
import Employees from "./Employees";
import Finance from "./Finance";
import SalesReports from "./SalesReports";
import Orders from "./Orders";
import Accounts from "./Accounts";
import RoutesAdmin from "./RoutesAdmin";
import Inventory from "./Inventory";


const Admin = () => {
    const [activePage, setActivePage] = useState("dashboard");
    const revenueChartRef = useRef(null);
    const productsChartRef = useRef(null);
    let revenueChartInstance = useRef(null);
    let productsChartInstance = useRef(null);
    useEffect(() => {
        if (revenueChartRef.current) {
            const ctx = revenueChartRef.current.getContext("2d");

            // 🔥 Hủy biểu đồ cũ trước khi vẽ biểu đồ mới
            if (revenueChartInstance.current) {
                revenueChartInstance.current.destroy();
            }

            revenueChartInstance.current = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Doanh thu (triệu VNĐ)",
                            data: [120, 190, 300, 250, 210, 320, 400, 380, 290, 310, 330, 390],
                            backgroundColor: "rgba(54, 162, 235, 0.6)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: { responsive: true, scales: { y: { beginAtZero: true } } },
            });
        }

        // 🚀 Cleanup khi component unmount để tránh lỗi
        return () => {
            if (revenueChartInstance.current) {
                revenueChartInstance.current.destroy();
            }
            if (productsChartInstance.current) {
                productsChartInstance.current.destroy();
            }
        };
    }, []);
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const toggleSidebar = () => {
        document.getElementById("sidebar").classList.toggle("show");
    };

    const showPage = (pageId) => {
        // Ẩn tất cả các trang trước khi hiển thị trang mong muốn
        document.querySelectorAll('.page-content').forEach(page => {
            page.style.display = 'none';
        });

        // Hiển thị trang được chọn
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.style.display = 'block';

            // Cuộn trang đến phần tử
            selectedPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    // Dữ liệu biểu đồ
    const revenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Doanh thu 2025',
            data: [210, 230, 270, 240, 260, 290, 310, 320, 290, 285, 0, 0],
            borderColor: '#0d6efd',
            backgroundColor: '#0d6efd20',
            tension: 0.3,
            fill: true
        }]
    };

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            { label: 'Doanh thu', data: [210, 230, 270, 240, 260, 290, 310, 320, 290, 285, 300, 320], backgroundColor: '#0d6efd' },
            { label: 'Chi phí', data: [180, 190, 180, 170, 180, 185, 195, 200, 180, 175, 180, 195], backgroundColor: '#6c757d' },
            { label: 'Lợi nhuận', data: [30, 40, 90, 70, 80, 105, 115, 120, 110, 110, 120, 125], backgroundColor: '#198754' }
        ]
    };

    const productData = {
        labels: ['Sản phẩm A', 'Sản phẩm B', 'Sản phẩm C', 'Sản phẩm D', 'Khác'],
        datasets: [{
            data: [35, 25, 15, 10, 15],
            backgroundColor: ['#0d6efd', '#198754', '#0dcaf0', '#ffc107', '#6c757d']
        }]
    };
    return (
        <>
            <div className="spinner-overlay" id="loadingSpinner">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            {/* Sidebar */}
            <div className="sidebar" id="sidebar">
                <div className="sidebar-header">
                    <div className="logo">Admin Dashboard</div>
                </div>
                <ul className="sidebar-nav">
                    <li className="nav-item active">
                        <a
                            href="#dashboard"
                            className="nav-link"
                            onclick="showPage('dashboard')"
                        >
                            <i className="fas fa-home" />
                            <span className="menu-text">Trang chủ</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();  // Ngăn reload trang
                                showPage('accounts'); // Gọi hàm để hiển thị phần nội dung
                            }}
                        >
                            <i className="fas fa-users" />
                            <span className="menu-text">Quản lý tài khoản</span>
                        </a>
                    </li>


                    <li className="nav-item">
                        <a
                            href="#orders"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
                                showPage('orders');
                            }}
                        >
                            <i className="fas fa-shopping-cart" />
                            <span className="menu-text">Quản lý đơn hàng</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#reports"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                showPage('reports');
                            }}
                        >
                            <i className="fas fa-chart-bar" />
                            <span className="menu-text">Báo cáo bán hàng</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#employees"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                showPage('employees');
                            }}
                        >
                            <i className="fas fa-id-card" />
                            <span className="menu-text">Quản lý nhân viên</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#finance"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                showPage('finance');
                            }}
                        >
                            <i className="fas fa-money-bill" />
                            <span className="menu-text">Quản lý tài chính</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#maintenance"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                showPage('maintenance');
                            }}
                        >
                            <i className="fas fa-route" />
                            <span className="menu-text">Quản lý bảo dưỡng</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#inventory"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                showPage('inventory');
                            }}
                        >
                            <i className="fas fa-box" />
                            <span className="menu-text">Kiểm soát hàng hóa</span>
                        </a>
                    </li>

                    <li className="nav-item mt-5">
                        <a
                            href="#"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                // Gọi hàm logout nếu có
                                console.log("Đăng xuất");
                            }}
                        >
                            <i className="fas fa-sign-out-alt" />
                            <span className="menu-text">Đăng xuất</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* Main Content */}
            <div className="main-content">
                {/* Top Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="btn btn-light d-lg-none me-3" id="toggleSidebar">
                            <i className="fas fa-bars" />
                        </button>
                        <form className="d-flex me-auto">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Tìm kiếm..."
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-primary" type="submit">
                                    <i className="fas fa-search" />
                                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown me-3">
                                <a
                                    className="nav-link position-relative"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="fas fa-bell fa-lg" />
                                    <span className="notification-badge">3</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Đơn hàng mới #1234
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            5 sản phẩm sắp hết hàng
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Báo cáo tuần đã sẵn sàng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    <div className="user-info">
                                        <img
                                            src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23007BFF'/%3E%3Cpath d='M20 22C17.8 22 16 20.2 16 18C16 15.8 17.8 14 20 14C22.2 14 24 15.8 24 18C24 20.2 22.2 22 20 22ZM20 24C24.7 24 28 25.7 28 28V30H12V28C12 25.7 15.3 24 20 24Z' fill='white'/%3E%3C/svg%3E"
                                            alt="Avatar"
                                            className="avatar"
                                        />
                                        <span className="user-name d-none d-sm-block">Admin</span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user me-2" />
                                            Hồ sơ
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cog me-2" />
                                            Cài đặt
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-sign-out-alt me-2" />
                                            Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Dashboard Page */}
                <div id="dashboard" className="page-content" style={{ display: "block" }}>
                    <h2 className="mb-4" data-aos="fade-right">
                        Tổng quan hệ thống
                    </h2>
                    <div className="row">
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="stat-card bg-gradient-primary">
                                <h5>Đơn hàng</h5>
                                <h2>1,286</h2>
                                <p className="mb-0">
                                    <i className="fas fa-arrow-up" /> 12% so với tháng trước
                                </p>
                                <i className="fas fa-shopping-cart" />
                            </div>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="stat-card bg-gradient-success">
                                <h5>Doanh thu</h5>
                                <h2>₫ 285M</h2>
                                <p className="mb-0">
                                    <i className="fas fa-arrow-up" /> 8% so với tháng trước
                                </p>
                                <i className="fas fa-money-bill-wave" />
                            </div>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="stat-card bg-gradient-info">
                                <h5>Khách hàng</h5>
                                <h2>5,382</h2>
                                <p className="mb-0">
                                    <i className="fas fa-arrow-up" /> 5% so với tháng trước
                                </p>
                                <i className="fas fa-users" />
                            </div>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay={400}>
                            <div className="stat-card bg-gradient-warning">
                                <h5>Sản phẩm</h5>
                                <h2>872</h2>
                                <p className="mb-0">
                                    <i className="fas fa-arrow-up" /> 3% so với tháng trước
                                </p>
                                <i className="fas fa-box" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Biểu đồ doanh thu */}
                        <div className="col-md-8 mb-4" data-aos="fade-up">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Doanh thu theo tháng</h5>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Năm 2025
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">2024</a></li>
                                            <li><a className="dropdown-item" href="#">2023</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-container">
                                        <canvas ref={revenueChartRef} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4" data-aos="fade-up">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Đơn hàng gần đây</h5>
                                    <a
                                        href="#"
                                        className="btn btn-sm btn-primary"
                                        onclick="showPage('orders')"
                                    >
                                        Xem tất cả
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>Mã đơn</th>
                                                <th>Khách hàng</th>
                                                <th>Trạng thái</th>
                                                <th>Tổng tiền</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>#ORD5723</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>
                                                    <span className="badge bg-success">Hoàn thành</span>
                                                </td>
                                                <td>₫ 1,250,000</td>
                                            </tr>
                                            <tr>
                                                <td>#ORD5722</td>
                                                <td>Trần Thị B</td>
                                                <td>
                                                    <span className="badge bg-warning">Đang giao</span>
                                                </td>
                                                <td>₫ 2,340,000</td>
                                            </tr>
                                            <tr>
                                                <td>#ORD5721</td>
                                                <td>Lê Văn C</td>
                                                <td>
                                                    <span className="badge bg-info">Chờ xác nhận</span>
                                                </td>
                                                <td>₫ 750,000</td>
                                            </tr>
                                            <tr>
                                                <td>#ORD5720</td>
                                                <td>Phạm Thị D</td>
                                                <td>
                                                    <span className="badge bg-danger">Đã hủy</span>
                                                </td>
                                                <td>₫ 890,000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Những hoạt động gần đây</h5>
                                    <a href="#" className="btn btn-sm btn-outline-primary">
                                        Chi tiết
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="activity-item d-flex py-3">
                                        <div className="me-3">
                                            <div
                                                className="bg-primary text-white rounded-circle p-2"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <i className="fas fa-shopping-cart" />
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Đơn hàng mới #ORD5723</h6>
                                            <p className="mb-0 text-muted small">Vừa xong</p>
                                        </div>
                                    </div>
                                    <div className="activity-item d-flex py-3">
                                        <div className="me-3">
                                            <div
                                                className="bg-success text-white rounded-circle p-2"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <i className="fas fa-user" />
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Khách hàng mới đăng ký</h6>
                                            <p className="mb-0 text-muted small">15 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="activity-item d-flex py-3">
                                        <div className="me-3">
                                            <div
                                                className="bg-warning text-white rounded-circle p-2"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <i className="fas fa-exclamation-triangle" />
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Cảnh báo: 5 sản phẩm sắp hết hàng</h6>
                                            <p className="mb-0 text-muted small">30 phút trước</p>
                                        </div>
                                    </div>
                                    <div className="activity-item d-flex py-3">
                                        <div className="me-3">
                                            <div
                                                className="bg-info text-white rounded-circle p-2"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <i className="fas fa-truck" />
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Đơn hàng #ORD5710 đã được giao</h6>
                                            <p className="mb-0 text-muted small">1 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Accounts Management Page */}
               <Accounts></Accounts>
                {/* Orders Management Page */}
                <Orders></Orders>
                {/* Sales Reports Page */}
               <SalesReports></SalesReports>
                <Employees></Employees>
                {/* Finance Management Page */}
                <Finance></Finance>
                {/* RoutesAdmin Management Page */}
                <RoutesAdmin></RoutesAdmin>
                {/* Inventory Management Page */}
                <Inventory></Inventory>
            </div>
            {/* Modals */}
            {/* Account Modal */}
            <div
                className="modal fade"
                id="accountModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin tài khoản</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Họ tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập họ tên"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Nhập email"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Vai trò</label>
                                        <select className="form-select">
                                            <option>Admin</option>
                                            <option>Nhân viên</option>
                                            <option>Khách hàng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mật khẩu</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Nhập mật khẩu"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Xác nhận mật khẩu</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Xác nhận mật khẩu"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Địa chỉ</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập địa chỉ"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Trạng thái</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="accountStatus"
                                            id="activeStatus"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="activeStatus">
                                            Hoạt động
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="accountStatus"
                                            id="inactiveStatus"
                                        />
                                        <label className="form-check-label" htmlFor="inactiveStatus">
                                            Bị chặn
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Order Modal */}
            <div className="modal fade" id="orderModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin đơn hàng</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Mã đơn hàng</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="#ORD5724"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Ngày đặt</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-03-24"
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Trạng thái</label>
                                        <select className="form-select">
                                            <option>Chờ xác nhận</option>
                                            <option>Đang xử lý</option>
                                            <option>Đang giao</option>
                                            <option>Hoàn thành</option>
                                            <option>Đã hủy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Khách hàng</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Tìm kiếm khách hàng..."
                                            />
                                            <button className="btn btn-outline-secondary" type="button">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Số điện thoại khách hàng"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Địa chỉ giao hàng</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Nhập địa chỉ giao hàng"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Sản phẩm</label>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th width="40%">Sản phẩm</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                                <th width="5%" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <select className="form-select">
                                                        <option selected="">Chọn sản phẩm</option>
                                                        <option>Sản phẩm A</option>
                                                        <option>Sản phẩm B</option>
                                                        <option>Sản phẩm C</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="150,000"
                                                        readOnly=""
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        defaultValue={1}
                                                        min={1}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="150,000"
                                                        readOnly=""
                                                    />
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-danger">
                                                        <i className="fas fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={5}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        <i className="fas fa-plus me-1" />
                                                        Thêm sản phẩm
                                                    </button>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ghi chú</label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Nhập ghi chú"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h6 className="card-title">Tổng thanh toán</h6>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <span>Tổng tiền hàng:</span>
                                                    <span>₫ 150,000</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2">
                                                    <span>Phí vận chuyển:</span>
                                                    <span>₫ 20,000</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2">
                                                    <span>Giảm giá:</span>
                                                    <span>₫ 0</span>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between fw-bold">
                                                    <span>Tổng thanh toán:</span>
                                                    <span>₫ 170,000</span>
                                                </div>
                                                <div className="mt-3">
                                                    <label className="form-label">
                                                        Phương thức thanh toán
                                                    </label>
                                                    <select className="form-select">
                                                        <option selected="">
                                                            Tiền mặt khi nhận hàng (COD)
                                                        </option>
                                                        <option>Chuyển khoản ngân hàng</option>
                                                        <option>Thẻ tín dụng/Ghi nợ</option>
                                                        <option>Ví điện tử</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu đơn hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Order Detail Modal */}
            <div
                className="modal fade"
                id="orderDetailModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết đơn hàng #ORD5723</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6>Thông tin đơn hàng</h6>
                                    <p className="mb-1">
                                        <strong>Mã đơn hàng:</strong> #ORD5723
                                    </p>
                                    <p className="mb-1">
                                        <strong>Ngày đặt:</strong> 24/03/2025
                                    </p>
                                    <p className="mb-1">
                                        <strong>Trạng thái:</strong>{" "}
                                        <span className="badge bg-info">Đang giao</span>
                                    </p>
                                    <p className="mb-1">
                                        <strong>Phương thức thanh toán:</strong> Tiền mặt khi nhận hàng
                                        (COD)
                                    </p>
                                    <p className="mb-0">
                                        <strong>Thanh toán:</strong>{" "}
                                        <span className="badge bg-success">Đã thanh toán</span>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h6>Thông tin khách hàng</h6>
                                    <p className="mb-1">
                                        <strong>Họ tên:</strong> Nguyễn Văn A
                                    </p>
                                    <p className="mb-1">
                                        <strong>Email:</strong> a.nguyen@example.com
                                    </p>
                                    <p className="mb-1">
                                        <strong>Số điện thoại:</strong> 0901234567
                                    </p>
                                    <p className="mb-0">
                                        <strong>Địa chỉ giao hàng:</strong> 123 Đường ABC, Quận XYZ, TP.
                                        Hồ Chí Minh
                                    </p>
                                </div>
                            </div>
                            <div className="table-responsive mb-4">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Sản phẩm A</td>
                                        <td>₫ 150,000</td>
                                        <td>2</td>
                                        <td>₫ 300,000</td>
                                    </tr>
                                    <tr>
                                        <td>Sản phẩm B</td>
                                        <td>₫ 250,000</td>
                                        <td>3</td>
                                        <td>₫ 750,000</td>
                                    </tr>
                                    <tr>
                                        <td>Sản phẩm C</td>
                                        <td>₫ 180,000</td>
                                        <td>1</td>
                                        <td>₫ 180,000</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colSpan={3} className="text-end">
                                            <strong>Tổng tiền hàng:</strong>
                                        </td>
                                        <td>₫ 1,230,000</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} className="text-end">
                                            <strong>Phí vận chuyển:</strong>
                                        </td>
                                        <td>₫ 20,000</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} className="text-end">
                                            <strong>Tổng thanh toán:</strong>
                                        </td>
                                        <td className="fw-bold">₫ 1,250,000</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Ghi chú</h6>
                                    <p>Giao hàng trong giờ hành chính, gọi trước khi giao.</p>
                                </div>
                                <div className="col-md-6">
                                    <h6>Lịch sử đơn hàng</h6>
                                    <div className="timeline">
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-success" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Đã tiếp nhận đơn hàng</div>
                                                    <div className="small text-muted">24/03/2025 08:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-success" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Đang xử lý</div>
                                                    <div className="small text-muted">24/03/2025 09:15</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-success" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Đã đóng gói</div>
                                                    <div className="small text-muted">24/03/2025 10:30</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-primary" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Đang giao hàng</div>
                                                    <div className="small text-muted">24/03/2025 13:45</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-secondary" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Giao hàng thành công</div>
                                                    <div className="small text-muted">Đang chờ...</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#orderModal"
                            >
                                Chỉnh sửa
                            </button>
                            <button type="button" className="btn btn-success">
                                <i className="fas fa-print me-1" />
                                In đơn hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Employee Modal */}
            <div
                className="modal fade"
                id="employeeModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin nhân viên</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã nhân viên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập mã NV"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Họ tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập họ tên"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Nhập email"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ngày sinh</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Giới tính</label>
                                        <select className="form-select">
                                            <option selected="">Chọn giới tính</option>
                                            <option>Nam</option>
                                            <option>Nữ</option>
                                            <option>Khác</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phòng ban</label>
                                        <select className="form-select">
                                            <option selected="">Chọn phòng ban</option>
                                            <option>Kinh doanh</option>
                                            <option>Marketing</option>
                                            <option>Kỹ thuật</option>
                                            <option>Kế toán</option>
                                            <option>Nhân sự</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Chức vụ</label>
                                        <select className="form-select">
                                            <option selected="">Chọn chức vụ</option>
                                            <option>Trưởng phòng</option>
                                            <option>Phó phòng</option>
                                            <option>Nhân viên</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ngày vào làm</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Lương cơ bản</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập lương cơ bản"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Địa chỉ</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập địa chỉ"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ghi chú</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập ghi chú (nếu có)"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Trạng thái</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="employeeStatus"
                                            id="workingStatus"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="workingStatus">
                                            Đang làm việc
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="employeeStatus"
                                            id="leaveStatus"
                                        />
                                        <label className="form-check-label" htmlFor="leaveStatus">
                                            Tạm nghỉ
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="employeeStatus"
                                            id="quitStatus"
                                        />
                                        <label className="form-check-label" htmlFor="quitStatus">
                                            Đã nghỉ việc
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Employee Detail Modal */}
            <div
                className="modal fade"
                id="employeeDetailModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin chi tiết nhân viên</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row mb-4">
                                <div className="col-md-3 text-center">
                                    <img
                                        src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23007BFF'/%3E%3Cpath d='M50 55C44.5 55 40 50.5 40 45C40 39.5 44.5 35 50 35C55.5 35 60 39.5 60 45C60 50.5 55.5 55 50 55ZM50 60C61.8 60 70 64.2 70 70V75H30V70C30 64.2 38.2 60 50 60Z' fill='white'/%3E%3C/svg%3E"
                                        alt="Avatar"
                                        className="rounded-circle mb-3"
                                        style={{ width: 100, height: 100 }}
                                    />
                                    <h5>Nguyễn Văn A</h5>
                                    <p className="badge bg-primary">Trưởng phòng</p>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <p className="mb-1">
                                                <strong>Mã nhân viên:</strong> NV001
                                            </p>
                                            <p className="mb-1">
                                                <strong>Email:</strong> a.nguyen@example.com
                                            </p>
                                            <p className="mb-1">
                                                <strong>Số điện thoại:</strong> 0901234567
                                            </p>
                                            <p className="mb-1">
                                                <strong>Ngày sinh:</strong> 01/01/1985
                                            </p>
                                            <p className="mb-1">
                                                <strong>Giới tính:</strong> Nam
                                            </p>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <p className="mb-1">
                                                <strong>Phòng ban:</strong> Kinh doanh
                                            </p>
                                            <p className="mb-1">
                                                <strong>Ngày vào làm:</strong> 01/01/2020
                                            </p>
                                            <p className="mb-1">
                                                <strong>Thâm niên:</strong> 5 năm 3 tháng
                                            </p>
                                            <p className="mb-1">
                                                <strong>Trạng thái:</strong>{" "}
                                                <span className="badge bg-success">Đang làm việc</span>
                                            </p>
                                            <p className="mb-1">
                                                <strong>Lương cơ bản:</strong> ₫ 15,000,000
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mb-1">
                                        <strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, TP. Hồ Chí
                                        Minh
                                    </p>
                                </div>
                            </div>
                            <ul className="nav nav-tabs mb-3" id="employeeDetailTabs">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="#salaryHistory"
                                        data-bs-toggle="tab"
                                    >
                                        Lịch sử lương
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#attendance" data-bs-toggle="tab">
                                        Chấm công
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#documents" data-bs-toggle="tab">
                                        Hồ sơ tài liệu
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="salaryHistory">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Kỳ lương</th>
                                                <th>Lương cơ bản</th>
                                                <th>Phụ cấp</th>
                                                <th>Thưởng</th>
                                                <th>Khấu trừ</th>
                                                <th>Tổng nhận</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>03/2025</td>
                                                <td>₫ 15,000,000</td>
                                                <td>₫ 2,000,000</td>
                                                <td>₫ 1,500,000</td>
                                                <td>₫ 1,850,000</td>
                                                <td>₫ 16,650,000</td>
                                                <td>
                                                    <span className="badge bg-warning">Chờ duyệt</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02/2025</td>
                                                <td>₫ 15,000,000</td>
                                                <td>₫ 2,000,000</td>
                                                <td>₫ 1,000,000</td>
                                                <td>₫ 1,850,000</td>
                                                <td>₫ 16,150,000</td>
                                                <td>
                                                    <span className="badge bg-success">Đã thanh toán</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>01/2025</td>
                                                <td>₫ 15,000,000</td>
                                                <td>₫ 2,000,000</td>
                                                <td>₫ 2,000,000</td>
                                                <td>₫ 1,850,000</td>
                                                <td>₫ 17,150,000</td>
                                                <td>
                                                    <span className="badge bg-success">Đã thanh toán</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="attendance">
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <select className="form-select">
                                                <option selected="">Tháng 3/2025</option>
                                                <option>Tháng 2/2025</option>
                                                <option>Tháng 1/2025</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm">
                                            <thead>
                                            <tr>
                                                <th colSpan={7} className="text-center">
                                                    Tháng 3/2025
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>CN</th>
                                                <th>T2</th>
                                                <th>T3</th>
                                                <th>T4</th>
                                                <th>T5</th>
                                                <th>T6</th>
                                                <th>T7</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-success text-white text-center">1</td>
                                                <td className="bg-success text-white text-center">2</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light text-center">3</td>
                                                <td className="bg-success text-white text-center">4</td>
                                                <td className="bg-success text-white text-center">5</td>
                                                <td className="bg-success text-white text-center">6</td>
                                                <td className="bg-success text-white text-center">7</td>
                                                <td className="bg-success text-white text-center">8</td>
                                                <td className="bg-success text-white text-center">9</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light text-center">10</td>
                                                <td className="bg-success text-white text-center">11</td>
                                                <td className="bg-success text-white text-center">12</td>
                                                <td className="bg-success text-white text-center">13</td>
                                                <td className="bg-success text-white text-center">14</td>
                                                <td className="bg-success text-white text-center">15</td>
                                                <td className="bg-success text-white text-center">16</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light text-center">17</td>
                                                <td className="bg-success text-white text-center">18</td>
                                                <td className="bg-success text-white text-center">19</td>
                                                <td className="bg-danger text-white text-center">20</td>
                                                <td className="bg-success text-white text-center">21</td>
                                                <td className="bg-success text-white text-center">22</td>
                                                <td className="bg-success text-white text-center">23</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light text-center">24</td>
                                                <td className="bg-success text-white text-center">25</td>
                                                <td className="bg-success text-white text-center">26</td>
                                                <td className="bg-success text-white text-center">27</td>
                                                <td className="bg-success text-white text-center">28</td>
                                                <td className="bg-success text-white text-center">29</td>
                                                <td className="bg-success text-white text-center">30</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-light text-center">31</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                                <td className="bg-light text-center">-</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-3">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <span className="badge bg-success">1</span> - Làm việc đủ
                                                công
                                            </div>
                                            <div className="me-3">
                                                <span className="badge bg-warning">0.5</span> - Làm việc nửa
                                                ngày
                                            </div>
                                            <div className="me-3">
                                                <span className="badge bg-danger">P</span> - Nghỉ phép
                                            </div>
                                            <div>
                                                <span className="badge bg-light text-dark">-</span> - Ngày
                                                nghỉ
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p>
                                                <strong>Tổng ngày làm việc:</strong> 21.5/22
                                            </p>
                                            <p>
                                                <strong>Ngày nghỉ phép:</strong> 1
                                            </p>
                                            <p>
                                                <strong>Ngày làm nửa buổi:</strong> 0
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="documents">
                                    <div className="list-group">
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                        >
                                            <div>
                                                <i className="fas fa-file-pdf me-2 text-danger" />
                                                Hợp đồng lao động
                                            </div>
                                            <span className="badge bg-primary rounded-pill">
                    15/12/2020
                  </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                        >
                                            <div>
                                                <i className="fas fa-file-pdf me-2 text-danger" />
                                                Sơ yếu lý lịch
                                            </div>
                                            <span className="badge bg-primary rounded-pill">
                    10/12/2020
                  </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                        >
                                            <div>
                                                <i className="fas fa-file-image me-2 text-info" />
                                                Bằng cấp, chứng chỉ
                                            </div>
                                            <span className="badge bg-primary rounded-pill">
                    10/12/2020
                  </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                        >
                                            <div>
                                                <i className="fas fa-file-word me-2 text-primary" />
                                                Bản đánh giá năm 2024
                                            </div>
                                            <span className="badge bg-primary rounded-pill">
                    15/01/2025
                  </span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-primary">
                                            <i className="fas fa-upload me-2" />
                                            Tải lên tài liệu mới
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeModal"
                            >
                                Chỉnh sửa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Salary Modal */}
            <div className="modal fade" id="salaryModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cập nhật lương</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Nhân viên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Nguyễn Văn A (NV001)"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Kỳ lương</label>
                                        <select className="form-select">
                                            <option selected="">Tháng 3/2025</option>
                                            <option>Tháng 2/2025</option>
                                            <option>Tháng 1/2025</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Lương cơ bản</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={15000000}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ngày công chuẩn</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            defaultValue={22}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Ngày công thực tế</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            defaultValue="21.5"
                                            step="0.5"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Phụ cấp</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={2000000}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h6 className="mt-4 mb-3">Thưởng và phúc lợi</h6>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Thưởng hiệu suất</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={1000000}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Thưởng dự án</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={500000}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h6 className="mt-4 mb-3">Khấu trừ</h6>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label className="form-label">Bảo hiểm xã hội (8%)</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={1200000}
                                                readOnly=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Bảo hiểm y tế (1.5%)</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={225000}
                                                readOnly=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Thuế TNCN (2.5%)</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={425000}
                                                readOnly=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h6 className="mt-4 mb-3">Tổng hợp</h6>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Tổng thu nhập</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={18500000}
                                                readOnly=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Tổng khấu trừ</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={1850000}
                                                readOnly=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Thực lãnh</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={16650000}
                                                readOnly=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ghi chú</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập ghi chú (nếu có)"
                                        defaultValue={""}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu
                            </button>
                            <button type="button" className="btn btn-success">
                                <i className="fas fa-paper-plane me-2" />
                                Gửi phiếu lương
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Salary Detail Modal */}
            <div
                className="modal fade"
                id="salaryDetailModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết lương - Tháng 3/2025</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="text-center mb-4">
                                <h5>Nguyễn Văn A (NV001)</h5>
                                <p className="text-muted">Phòng Kinh doanh - Trưởng phòng</p>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header bg-light">
                                    <h6 className="mb-0">Thu nhập</h6>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Lương cơ bản</span>
                                        <span>₫ 15,000,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Phụ cấp</span>
                                        <span>₫ 2,000,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Thưởng hiệu suất</span>
                                        <span>₫ 1,000,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Thưởng dự án</span>
                                        <span>₫ 500,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between fw-bold mt-3">
                                        <span>Tổng thu nhập</span>
                                        <span>₫ 18,500,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header bg-light">
                                    <h6 className="mb-0">Khấu trừ</h6>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Bảo hiểm xã hội (8%)</span>
                                        <span>₫ 1,200,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Bảo hiểm y tế (1.5%)</span>
                                        <span>₫ 225,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Thuế TNCN (2.5%)</span>
                                        <span>₫ 425,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between fw-bold mt-3">
                                        <span>Tổng khấu trừ</span>
                                        <span>₫ 1,850,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">Thực lãnh</h6>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between fw-bold">
                                        <span>Lương thực lãnh</span>
                                        <span>₫ 16,650,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-light">
                                    <h6 className="mb-0">Thông tin khác</h6>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Ngày công chuẩn</span>
                                        <span>22 ngày</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Ngày công thực tế</span>
                                        <span>21.5 ngày</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Ngày nghỉ phép</span>
                                        <span>1 ngày</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Ngày làm nửa buổi</span>
                                        <span>1 ngày</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Trạng thái</span>
                                        <span className="badge bg-warning">Chờ duyệt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#salaryModal"
                            >
                                Chỉnh sửa
                            </button>
                            <button type="button" className="btn btn-success">
                                <i className="fas fa-print me-2" />
                                In phiếu lương
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Transaction Modal */}
            <div
                className="modal fade"
                id="transactionModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thêm giao dịch mới</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã giao dịch</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="TRX5724"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ngày giao dịch</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-03-24"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Loại giao dịch</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn loại giao dịch --</option>
                                            <option>Thu</option>
                                            <option>Chi</option>
                                            <option>Chuyển khoản nội bộ</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Danh mục</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn danh mục --</option>
                                            <option>Doanh thu bán hàng</option>
                                            <option>Chi phí nhân sự</option>
                                            <option>Chi phí vận hành</option>
                                            <option>Chi phí tiện ích</option>
                                            <option>Chi phí marketing</option>
                                            <option>Khác</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Số tiền</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập số tiền"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phương thức thanh toán</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn phương thức --</option>
                                            <option>Tiền mặt</option>
                                            <option>Chuyển khoản ngân hàng</option>
                                            <option>Thẻ tín dụng/Ghi nợ</option>
                                            <option>Ví điện tử</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Đối tác/Người nhận</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập tên đối tác hoặc người nhận"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Trạng thái</label>
                                        <select className="form-select">
                                            <option selected="">Hoàn thành</option>
                                            <option>Đang xử lý</option>
                                            <option>Chờ xác nhận</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mô tả</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập mô tả giao dịch"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tài liệu đính kèm</label>
                                    <input type="file" className="form-control" />
                                    <div className="form-text">
                                        Hóa đơn, chứng từ, phiếu chi/thu... (nếu có)
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu giao dịch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Invoice Modal */}
            <div
                className="modal fade"
                id="invoiceModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Tạo hóa đơn mới</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Mã hóa đơn</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="INV6724"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Ngày tạo</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-03-24"
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Hạn thanh toán</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-04-03"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Khách hàng</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Tìm kiếm khách hàng..."
                                            />
                                            <button className="btn btn-outline-secondary" type="button">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email khách hàng"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Số điện thoại khách hàng"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Địa chỉ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Địa chỉ khách hàng"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Danh sách sản phẩm/dịch vụ</label>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th width="40%">Mô tả</th>
                                                <th>Đơn giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                                <th width="5%" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nhập mô tả"
                                                    />
                                                </td>
                                                <td>
                                                    <div className="input-group">
                                                        <span className="input-group-text">₫</span>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            defaultValue={0}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        defaultValue={1}
                                                        min={1}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="input-group">
                                                        <span className="input-group-text">₫</span>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            defaultValue={0}
                                                            readOnly=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-danger">
                                                        <i className="fas fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={5}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        <i className="fas fa-plus me-1" />
                                                        Thêm dòng
                                                    </button>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ghi chú</label>
                                        <textarea
                                            className="form-control"
                                            rows={5}
                                            placeholder="Nhập ghi chú"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h6 className="card-title">Tổng thanh toán</h6>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <span>Tổng tiền hàng:</span>
                                                    <span>₫ 0</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2">
                                                    <span>Thuế (10%):</span>
                                                    <span>₫ 0</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2">
                                                    <span>Giảm giá:</span>
                                                    <div
                                                        className="input-group input-group-sm"
                                                        style={{ width: 150 }}
                                                    >
                                                        <span className="input-group-text">₫</span>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            defaultValue={0}
                                                        />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between fw-bold">
                                                    <span>Tổng thanh toán:</span>
                                                    <span>₫ 0</span>
                                                </div>
                                                <div className="mt-3">
                                                    <label className="form-label">Trạng thái</label>
                                                    <select className="form-select">
                                                        <option selected="">Chưa thanh toán</option>
                                                        <option>Đã thanh toán</option>
                                                        <option>Đã hủy</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-success me-2">
                                <i className="fas fa-paper-plane me-2" />
                                Lưu và gửi
                            </button>
                            <button type="button" className="btn btn-primary">
                                <i className="fas fa-save me-2" />
                                Lưu hóa đơn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Route Modal */}
            <div className="modal fade" id="routeModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin tuyến đường</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã tuyến</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập mã tuyến"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Tên tuyến</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập tên tuyến"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Điểm đầu</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập điểm đầu"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Điểm cuối</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập điểm cuối"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Khoảng cách (km)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Nhập khoảng cách"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Thời gian (giờ)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Nhập thời gian di chuyển"
                                            step="0.1"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Khu vực</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn khu vực --</option>
                                            <option>Miền Bắc</option>
                                            <option>Miền Trung</option>
                                            <option>Miền Nam</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phương tiện vận chuyển</label>
                                        <select className="form-select" multiple="" size={3}>
                                            <option>Xe tải nhỏ (&lt; 1.5 tấn)</option>
                                            <option>Xe tải vừa (1.5 - 3.5 tấn)</option>
                                            <option>Xe tải lớn (&gt; 3.5 tấn)</option>
                                            <option>Xe container</option>
                                        </select>
                                        <div className="form-text">
                                            Giữ Ctrl để chọn nhiều phương tiện
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Điểm dừng trung gian</label>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Điểm dừng</th>
                                                <th>Khoảng cách từ điểm đầu (km)</th>
                                                <th>Thời gian dừng (phút)</th>
                                                <th width="5%" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nhập tên điểm dừng"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Khoảng cách"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Thời gian"
                                                    />
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-danger">
                                                        <i className="fas fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={4}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        <i className="fas fa-plus me-1" />
                                                        Thêm điểm dừng
                                                    </button>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Thông tin chi phí</label>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label small">
                                                Chi phí nhiên liệu (₫/km)
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập chi phí"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label small">Chi phí BOT/phà</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập chi phí"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label small">Chi phí khác</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập chi phí"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Lịch trình hoạt động</label>
                                    <select className="form-select mb-2">
                                        <option selected="">Hàng ngày</option>
                                        <option>Thứ 2 - Thứ 6</option>
                                        <option>Thứ 2 - Thứ 7</option>
                                        <option>Cuối tuần</option>
                                        <option>Tùy chỉnh</option>
                                    </select>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="mon"
                                            />
                                            <label className="form-check-label" htmlFor="mon">
                                                Thứ 2
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="tue"
                                            />
                                            <label className="form-check-label" htmlFor="tue">
                                                Thứ 3
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="wed"
                                            />
                                            <label className="form-check-label" htmlFor="wed">
                                                Thứ 4
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="thu"
                                            />
                                            <label className="form-check-label" htmlFor="thu">
                                                Thứ 5
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="fri"
                                            />
                                            <label className="form-check-label" htmlFor="fri">
                                                Thứ 6
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="sat"
                                            />
                                            <label className="form-check-label" htmlFor="sat">
                                                Thứ 7
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="sun"
                                            />
                                            <label className="form-check-label" htmlFor="sun">
                                                Chủ nhật
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mô tả</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập mô tả chi tiết về tuyến đường (nếu có)"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Trạng thái</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="routeStatus"
                                            id="activeRouteStatus"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="activeRouteStatus">
                                            Đang hoạt động
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="routeStatus"
                                            id="pausedRouteStatus"
                                        />
                                        <label className="form-check-label" htmlFor="pausedRouteStatus">
                                            Tạm ngưng
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="routeStatus"
                                            id="maintenanceRouteStatus"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="maintenanceRouteStatus"
                                        >
                                            Đang bảo trì
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Route Detail Modal */}
            <div
                className="modal fade"
                id="routeDetailModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết tuyến đường</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6>Thông tin cơ bản</h6>
                                    <p className="mb-1">
                                        <strong>Mã tuyến:</strong> R001
                                    </p>
                                    <p className="mb-1">
                                        <strong>Tên tuyến:</strong> Tuyến Hà Nội - Hải Phòng
                                    </p>
                                    <p className="mb-1">
                                        <strong>Khoảng cách:</strong> 120 km
                                    </p>
                                    <p className="mb-1">
                                        <strong>Thời gian di chuyển:</strong> 2.5 giờ
                                    </p>
                                    <p className="mb-1">
                                        <strong>Khu vực:</strong> Miền Bắc
                                    </p>
                                    <p className="mb-0">
                                        <strong>Trạng thái:</strong>{" "}
                                        <span className="badge bg-success">Đang hoạt động</span>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h6>Thông tin hoạt động</h6>
                                    <p className="mb-1">
                                        <strong>Phương tiện vận chuyển:</strong> Xe tải, Xe container
                                    </p>
                                    <p className="mb-1">
                                        <strong>Tần suất hoạt động:</strong> Hàng ngày
                                    </p>
                                    <p className="mb-1">
                                        <strong>Ngày bắt đầu:</strong> 01/01/2022
                                    </p>
                                    <p className="mb-1">
                                        <strong>Tổng chuyến đã thực hiện:</strong> 2,450
                                    </p>
                                    <p className="mb-1">
                                        <strong>Tỷ lệ đúng giờ:</strong> 92%
                                    </p>
                                    <p className="mb-0">
                                        <strong>Tỷ lệ hoàn thành:</strong> 98%
                                    </p>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <h6>Các điểm dừng</h6>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Điểm dừng</th>
                                                <th>Khoảng cách từ điểm đầu (km)</th>
                                                <th>Thời gian dừng (phút)</th>
                                                <th>Ghi chú</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Hà Nội</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>Điểm xuất phát</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Hưng Yên</td>
                                                <td>40</td>
                                                <td>15</td>
                                                <td>Điểm trung chuyển</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Hải Dương</td>
                                                <td>80</td>
                                                <td>15</td>
                                                <td>Điểm trung chuyển</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Hải Phòng</td>
                                                <td>120</td>
                                                <td>0</td>
                                                <td>Điểm đến</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6>Thông tin chi phí</h6>
                                    <p className="mb-1">
                                        <strong>Chi phí nhiên liệu:</strong> ₫ 8,000/km
                                    </p>
                                    <p className="mb-1">
                                        <strong>Chi phí BOT/phà:</strong> ₫ 120,000
                                    </p>
                                    <p className="mb-1">
                                        <strong>Chi phí khác:</strong> ₫ 100,000
                                    </p>
                                    <p className="mb-0">
                                        <strong>Tổng chi phí:</strong> ₫ 1,180,000/lượt
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h6>Lịch trình hoạt động</h6>
                                    <p className="mb-1">
                                        <strong>Lịch trình:</strong> Hàng ngày
                                    </p>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <span className="badge bg-primary">Thứ 2</span>
                                        <span className="badge bg-primary">Thứ 3</span>
                                        <span className="badge bg-primary">Thứ 4</span>
                                        <span className="badge bg-primary">Thứ 5</span>
                                        <span className="badge bg-primary">Thứ 6</span>
                                        <span className="badge bg-primary">Thứ 7</span>
                                        <span className="badge bg-primary">Chủ nhật</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h6>Lịch sử hoạt động</h6>
                                    <div className="timeline mb-0">
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-success" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">
                                                        Cập nhật thông tin tuyến đường
                                                    </div>
                                                    <div className="small text-muted">
                                                        15/03/2025 - Cập nhật điểm dừng mới
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-warning" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Tạm ngưng hoạt động</div>
                                                    <div className="small text-muted">
                                                        10/01/2025 - 15/01/2025 (Bảo trì đường)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item mb-2">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-success" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Cập nhật chi phí</div>
                                                    <div className="small text-muted">
                                                        01/01/2025 - Cập nhật chi phí nhiên liệu
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <i className="fas fa-circle text-primary" />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">Tạo mới tuyến đường</div>
                                                    <div className="small text-muted">01/01/2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#routeModal"
                            >
                                Chỉnh sửa
                            </button>
                            <button type="button" className="btn btn-success">
                                <i className="fas fa-print me-1" />
                                In thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Modal */}
            <div
                className="modal fade"
                id="productModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin sản phẩm</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã sản phẩm</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập mã sản phẩm"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">SKU</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập mã SKU"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Danh mục</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn danh mục --</option>
                                            <option>Danh mục A</option>
                                            <option>Danh mục B</option>
                                            <option>Danh mục C</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Nhà cung cấp</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn nhà cung cấp --</option>
                                            <option>Nhà cung cấp A</option>
                                            <option>Nhà cung cấp B</option>
                                            <option>Nhà cung cấp C</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Giá nhập</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập giá nhập"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Giá bán</label>
                                        <div className="input-group">
                                            <span className="input-group-text">₫</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Nhập giá bán"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Đơn vị</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn đơn vị --</option>
                                            <option>Cái</option>
                                            <option>Bộ</option>
                                            <option>Thùng</option>
                                            <option>Kg</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Tồn kho</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Số lượng trong kho"
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Ngưỡng cảnh báo</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Ngưỡng cảnh báo"
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Số lượng tối đa</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Số lượng tối đa"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mô tả</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Nhập mô tả chi tiết sản phẩm"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Vị trí kho</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập vị trí lưu trữ trong kho"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã vạch</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập mã vạch sản phẩm"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Hình ảnh</label>
                                    <input type="file" className="form-control" multiple="" />
                                    <div className="form-text">
                                        Có thể chọn nhiều hình ảnh, kích thước tối đa 2MB/ảnh
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Trạng thái</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="productStatus"
                                            id="activeProductStatus"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="activeProductStatus"
                                        >
                                            Đang kinh doanh
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="productStatus"
                                            id="inactiveProductStatus"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inactiveProductStatus"
                                        >
                                            Ngừng kinh doanh
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Detail Modal */}
            <div
                className="modal fade"
                id="productDetailModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết sản phẩm</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row mb-4">
                                <div className="col-md-3 text-center">
                                    <div className="bg-light rounded p-3 mb-3">
                                        <i className="fas fa-box fa-5x text-primary" />
                                    </div>
                                    <p className="badge bg-success">Còn hàng</p>
                                </div>
                                <div className="col-md-9">
                                    <h5>Sản phẩm A</h5>
                                    <p className="text-muted mb-3">SKU: A123456 | Mã SP: SP001</p>
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <p className="mb-1">
                                                <strong>Danh mục:</strong> Danh mục A
                                            </p>
                                            <p className="mb-1">
                                                <strong>Nhà cung cấp:</strong> Nhà cung cấp A
                                            </p>
                                            <p className="mb-1">
                                                <strong>Đơn vị:</strong> Cái
                                            </p>
                                            <p className="mb-1">
                                                <strong>Tồn kho:</strong> 120
                                            </p>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <p className="mb-1">
                                                <strong>Giá nhập:</strong> ₫ 120,000
                                            </p>
                                            <p className="mb-1">
                                                <strong>Giá bán:</strong> ₫ 150,000
                                            </p>
                                            <p className="mb-1">
                                                <strong>Đã bán:</strong> 250
                                            </p>
                                            <p className="mb-1">
                                                <strong>Ngày cập nhật:</strong> 15/03/2025
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-3">
                                        <strong>Mô tả:</strong>
                                    </p>
                                    <p>
                                        Đây là sản phẩm A với nhiều tính năng và công dụng. Sản phẩm
                                        được nhập khẩu chính hãng và có chất lượng cao.
                                    </p>
                                </div>
                            </div>
                            <ul className="nav nav-tabs mb-3" id="productDetailTabs">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="#inventory-history"
                                        data-bs-toggle="tab"
                                    >
                                        Lịch sử tồn kho
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#sales-history"
                                        data-bs-toggle="tab"
                                    >
                                        Lịch sử bán hàng
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#product-info" data-bs-toggle="tab">
                                        Thông tin khác
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="inventory-history">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>Mã GD</th>
                                                <th>Ngày</th>
                                                <th>Loại</th>
                                                <th>Số lượng</th>
                                                <th>Tồn kho sau GD</th>
                                                <th>Người thực hiện</th>
                                                <th>Ghi chú</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>GD5723</td>
                                                <td>24/03/2025</td>
                                                <td>
                                                    <span className="badge bg-success">Nhập kho</span>
                                                </td>
                                                <td>+50</td>
                                                <td>120</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>Nhập hàng theo đơn PO123</td>
                                            </tr>
                                            <tr>
                                                <td>GD5715</td>
                                                <td>20/03/2025</td>
                                                <td>
                                                    <span className="badge bg-danger">Xuất kho</span>
                                                </td>
                                                <td>-10</td>
                                                <td>70</td>
                                                <td>Trần Thị B</td>
                                                <td>Xuất theo đơn hàng #ORD5715</td>
                                            </tr>
                                            <tr>
                                                <td>GD5712</td>
                                                <td>18/03/2025</td>
                                                <td>
                                                    <span className="badge bg-success">Nhập kho</span>
                                                </td>
                                                <td>+30</td>
                                                <td>80</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>Nhập hàng theo đơn PO120</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sales-history">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Mã đơn</th>
                                                <th>Ngày</th>
                                                <th>Khách hàng</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>#ORD5723</td>
                                                <td>24/03/2025</td>
                                                <td>Nguyễn Văn X</td>
                                                <td>2</td>
                                                <td>₫ 150,000</td>
                                                <td>₫ 300,000</td>
                                            </tr>
                                            <tr>
                                                <td>#ORD5715</td>
                                                <td>20/03/2025</td>
                                                <td>Trần Thị Y</td>
                                                <td>5</td>
                                                <td>₫ 150,000</td>
                                                <td>₫ 750,000</td>
                                            </tr>
                                            <tr>
                                                <td>#ORD5710</td>
                                                <td>18/03/2025</td>
                                                <td>Lê Văn Z</td>
                                                <td>3</td>
                                                <td>₫ 150,000</td>
                                                <td>₫ 450,000</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={3} className="text-end">
                                                    <strong>Tổng 30 ngày qua:</strong>
                                                </td>
                                                <td>35</td>
                                                <td />
                                                <td>₫ 5,250,000</td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="chart-container mt-4" style={{ height: 200 }}>
                                        <canvas id="productSalesChart" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="product-info">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Thông tin lưu trữ</h6>
                                            <p className="mb-1">
                                                <strong>Vị trí kho:</strong> Kệ A, Hàng 3, Ô 5
                                            </p>
                                            <p className="mb-1">
                                                <strong>Ngưỡng cảnh báo:</strong> 20
                                            </p>
                                            <p className="mb-1">
                                                <strong>Số lượng tối đa:</strong> 200
                                            </p>
                                            <p className="mb-1">
                                                <strong>Mã vạch:</strong> 8938527365271
                                            </p>
                                            <h6 className="mt-4">Thông tin kỹ thuật</h6>
                                            <p className="mb-1">
                                                <strong>Kích thước:</strong> 10cm x 20cm x 5cm
                                            </p>
                                            <p className="mb-1">
                                                <strong>Trọng lượng:</strong> 0.5 kg
                                            </p>
                                            <p className="mb-1">
                                                <strong>Màu sắc:</strong> Trắng, Đen, Xanh
                                            </p>
                                            <p className="mb-1">
                                                <strong>Xuất xứ:</strong> Việt Nam
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Thông tin kinh doanh</h6>
                                            <p className="mb-1">
                                                <strong>Lợi nhuận trung bình:</strong> ₫ 30,000/sản phẩm
                                            </p>
                                            <p className="mb-1">
                                                <strong>Tỷ suất lợi nhuận:</strong> 25%
                                            </p>
                                            <p className="mb-1">
                                                <strong>Thời gian quay vòng:</strong> 15 ngày
                                            </p>
                                            <p className="mb-1">
                                                <strong>Xếp hạng bán chạy:</strong> #5
                                            </p>
                                            <h6 className="mt-4">Dự báo</h6>
                                            <p className="mb-1">
                                                <strong>Dự báo bán hàng (30 ngày tới):</strong> 45 sản phẩm
                                            </p>
                                            <p className="mb-1">
                                                <strong>Dự kiến hết hàng:</strong> Không (đủ hàng)
                                            </p>
                                            <p className="mb-1">
                                                <strong>Đề xuất nhập hàng:</strong> Không cần thiết
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#productModal"
                            >
                                Chỉnh sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#importModal"
                            >
                                <i className="fas fa-plus-circle me-2" />
                                Nhập hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Import Modal */}
            <div className="modal fade" id="importModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Nhập hàng</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Mã phiếu nhập</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="PN20250324"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ngày nhập</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-03-24"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Nhà cung cấp</label>
                                        <select className="form-select">
                                            <option selected="">-- Chọn nhà cung cấp --</option>
                                            <option>Nhà cung cấp A</option>
                                            <option>Nhà cung cấp B</option>
                                            <option>Nhà cung cấp C</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Kho nhập</label>
                                        <select className="form-select">
                                            <option selected="">Kho chính</option>
                                            <option>Kho phụ 1</option>
                                            <option>Kho phụ 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Danh sách sản phẩm</label>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th width="40%">Sản phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá nhập</th>
                                                <th>Thành tiền</th>
                                                <th width="5%" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <select className="form-select">
                                                        <option selected="">-- Chọn sản phẩm --</option>
                                                        <option>Sản phẩm A</option>
                                                        <option>Sản phẩm B</option>
                                                        <option>Sản phẩm C</option>
                                                        <option>Sản phẩm D</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        defaultValue={1}
                                                        min={1}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="input-group">
                                                        <span className="input-group-text">₫</span>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            defaultValue={120000}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group">
                                                        <span className="input-group-text">₫</span>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            defaultValue={120000}
                                                            readOnly=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-danger">
                                                        <i className="fas fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan={5}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        <i className="fas fa-plus me-1" />
                                                        Thêm sản phẩm
                                                    </button>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Ghi chú</label>
                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                placeholder="Nhập ghi chú"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Tài liệu đính kèm</label>
                                            <input type="file" className="form-control" multiple="" />
                                            <div className="form-text">Hoá đơn, phiếu giao hàng...</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h6 className="card-title">Tổng thanh toán</h6>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <span>Tổng tiền hàng:</span>
                                                    <span>₫ 120,000</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2">
                                                    <span>Thuế VAT (10%):</span>
                                                    <span>₫ 12,000</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2">
                                                    <span>Chi phí vận chuyển:</span>
                                                    <div
                                                        className="input-group input-group-sm"
                                                        style={{ width: 150 }}
                                                    >
                                                        <span className="input-group-text">₫</span>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            defaultValue={0}
                                                        />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between fw-bold">
                                                    <span>Tổng thanh toán:</span>
                                                    <span>₫ 132,000</span>
                                                </div>
                                                <div className="mt-3">
                                                    <label className="form-label">
                                                        Trạng thái thanh toán
                                                    </label>
                                                    <select className="form-select">
                                                        <option selected="">Đã thanh toán</option>
                                                        <option>Chưa thanh toán</option>
                                                        <option>Thanh toán một phần</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button type="button" className="btn btn-primary">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Transaction Detail Modal */}
            <div
                className="modal fade"
                id="transactionDetailModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết giao dịch</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="text-center mb-3">
                                <div
                                    className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{ width: 80, height: 80 }}
                                >
                                    <i className="fas fa-box-open fa-3x text-primary" />
                                </div>
                                <h5>Giao dịch nhập kho #GD5723</h5>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header bg-light">
                                    <h6 className="mb-0">Thông tin cơ bản</h6>
                                </div>
                                <div className="card-body">
                                    <p className="mb-1">
                                        <strong>Mã giao dịch:</strong> GD5723
                                    </p>
                                    <p className="mb-1">
                                        <strong>Ngày thực hiện:</strong> 24/03/2025 15:30
                                    </p>
                                    <p className="mb-1">
                                        <strong>Loại giao dịch:</strong>{" "}
                                        <span className="badge bg-success">Nhập kho</span>
                                    </p>
                                    <p className="mb-1">
                                        <strong>Mã phiếu nhập:</strong> PN20250324
                                    </p>
                                    <p className="mb-1">
                                        <strong>Người thực hiện:</strong> Nguyễn Văn A
                                    </p>
                                    <p className="mb-0">
                                        <strong>Trạng thái:</strong>{" "}
                                        <span className="badge bg-success">Hoàn thành</span>
                                    </p>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header bg-light">
                                    <h6 className="mb-0">Chi tiết sản phẩm</h6>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <div>Sản phẩm A</div>
                                                    <small className="text-muted">SKU: A123456</small>
                                                </div>
                                                <div className="text-end">
                                                    <div className="fw-bold text-success">+50</div>
                                                    <small className="text-muted">Tồn sau: 120</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-light">
                                    <h6 className="mb-0">Thông tin bổ sung</h6>
                                </div>
                                <div className="card-body">
                                    <p className="mb-1">
                                        <strong>Nhà cung cấp:</strong> Nhà cung cấp A
                                    </p>
                                    <p className="mb-1">
                                        <strong>Kho:</strong> Kho chính
                                    </p>
                                    <p className="mb-1">
                                        <strong>Ghi chú:</strong> Nhập hàng theo đơn PO123
                                    </p>
                                    <p className="mb-0">
                                        <strong>Tài liệu đính kèm:</strong> <a href="#">Hóa đơn.pdf</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button type="button" className="btn btn-primary">
                                <i className="fas fa-print me-2" />
                                In phiếu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
