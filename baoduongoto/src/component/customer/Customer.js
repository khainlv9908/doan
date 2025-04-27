import React, {useEffect} from "react";
import "./customer.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Footer";
import Header from "./Header";
const Customer = () => {
    useEffect(() => {
        // Khởi tạo AOS
        AOS.init({
            duration: 800,
            once: true,
        });

        // Smooth scrolling cho anchor links
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });

                // Cập nhật class 'active' cho menu
                document.querySelectorAll(".navbar-nav .nav-link").forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                e.currentTarget.classList.add("active");
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", handleSmoothScroll);
        });

        // Active nav item khi scroll
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
                if (navLink.getAttribute("href") === `#${current}`) {
                    navLink.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        // Khởi tạo tooltip của Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Cleanup event listeners khi component unmount
        return () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.removeEventListener("click", handleSmoothScroll);
            });
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Header></Header>
            {/* Hero Section */}
            <section id="hero" className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration={1000}
                        >
                            <h1 className="hero-title">
                                Chúng tôi chăm sóc xe của bạn như chính xe của mình
                            </h1>
                            <p className="hero-subtitle">
                                Dịch vụ bảo dưỡng &amp; sửa chữa ô tô chuyên nghiệp, uy tín hàng đầu
                                Việt Nam
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <a href="#maintenance" className="btn btn-primary btn-lg">
                                    Đặt lịch bảo dưỡng
                                </a>
                                <a href="#quotes" className="btn btn-outline-light btn-lg">
                                    Nhận báo giá
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 d-none d-lg-block"
                            data-aos="fade-left"
                            data-aos-duration={1000}
                        >
                            <img
                                src="https://placehold.co/600x400/2c62e8/FFFFFF/png?text=AutoCare+Service"
                                className="img-fluid rounded"
                                alt="Dịch vụ bảo dưỡng xe"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Dịch vụ chính */}
            <section id="services" className="section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Dịch vụ của chúng tôi
                    </h2>
                    <div className="row">
                        <div
                            className="col-md-6 col-lg-3 mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="service-card">
                                <div className="service-icon">
                                    <i className="fas fa-tools" />
                                </div>
                                <h3 className="service-title">Bảo dưỡng định kỳ</h3>
                                <p className="service-description">
                                    Chăm sóc xe theo lịch trình để đảm bảo hiệu suất tối ưu và kéo dài
                                    tuổi thọ xe.
                                </p>
                                <a href="#maintenance" className="btn btn-outline-primary">
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="service-card">
                                <div className="service-icon">
                                    <i className="fas fa-car" />
                                </div>
                                <h3 className="service-title">Sửa chữa toàn diện</h3>
                                <p className="service-description">
                                    Dịch vụ sửa chữa chuyên nghiệp cho mọi hãng xe với đội ngũ kỹ
                                    thuật viên lành nghề.
                                </p>
                                <a href="#repair-history" className="btn btn-outline-primary">
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <div className="service-card">
                                <div className="service-icon">
                                    <i className="fas fa-oil-can" />
                                </div>
                                <h3 className="service-title">Thay dầu &amp; Kiểm tra</h3>
                                <p className="service-description">
                                    Thay dầu định kỳ và kiểm tra toàn diện hệ thống vận hành của xe.
                                </p>
                                <a href="#quotes" className="btn btn-outline-primary">
                                    Nhận báo giá
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3 mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={400}
                        >
                            <div className="service-card">
                                <div className="service-icon">
                                    <i className="fas fa-tachometer-alt" />
                                </div>
                                <h3 className="service-title">Chẩn đoán điện tử</h3>
                                <p className="service-description">
                                    Sử dụng công nghệ hiện đại để chẩn đoán chính xác các vấn đề của
                                    xe.
                                </p>
                                <a href="#feedback" className="btn btn-outline-primary">
                                    Đánh giá dịch vụ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Lịch bảo dưỡng */}
            <section id="maintenance" className="section bg-light">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Lịch bảo dưỡng
                    </h2>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <ul
                                className="nav nav-tabs schedule-tabs mb-3"
                                id="maintenanceTabs"
                                role="tablist"
                                data-aos="fade-up"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="upcoming-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#upcoming"
                                        type="button"
                                        role="tab"
                                    >
                                        Sắp tới
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="past-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#past"
                                        type="button"
                                        role="tab"
                                    >
                                        Đã hoàn thành
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="maintenanceTabsContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="upcoming"
                                    role="tabpanel"
                                >
                                    <div
                                        className="maintenance-schedule-card"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <div className="maintenance-date">15/04/2025 - 09:30</div>
                                                <h5>Bảo dưỡng 10.000 km</h5>
                                                <div className="maintenance-details">
                                                    <p>
                                                        <i className="fas fa-car me-2" /> Toyota Camry -
                                                        51F-12345
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-map-marker-alt me-2" /> Chi nhánh:
                                                        123 Nguyễn Văn Linh, Q.7, TP.HCM
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-tools me-2" /> Thay dầu, thay lọc
                                                        nhớt, kiểm tra phanh, kiểm tra hệ thống điện
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                    <span className="badge bg-info maintenance-status">
                      Sắp tới
                    </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 mt-3">
                                            <button className="btn btn-outline-danger">Hủy lịch</button>
                                            <button className="btn btn-primary">Đổi lịch</button>
                                        </div>
                                    </div>
                                    <div
                                        className="maintenance-schedule-card"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <div className="maintenance-date">28/05/2025 - 14:00</div>
                                                <h5>Kiểm tra định kỳ</h5>
                                                <div className="maintenance-details">
                                                    <p>
                                                        <i className="fas fa-car me-2" /> Toyota Camry -
                                                        51F-12345
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-map-marker-alt me-2" /> Chi nhánh:
                                                        123 Nguyễn Văn Linh, Q.7, TP.HCM
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-tools me-2" /> Kiểm tra tổng thể,
                                                        cân chỉnh thước lái, kiểm tra hệ thống làm mát
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                    <span className="badge bg-info maintenance-status">
                      Sắp tới
                    </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 mt-3">
                                            <button className="btn btn-outline-danger">Hủy lịch</button>
                                            <button className="btn btn-primary">Đổi lịch</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="past" role="tabpanel">
                                    <div
                                        className="maintenance-schedule-card"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <div className="maintenance-date">15/01/2025 - 10:00</div>
                                                <h5>Bảo dưỡng 5.000 km</h5>
                                                <div className="maintenance-details">
                                                    <p>
                                                        <i className="fas fa-car me-2" /> Toyota Camry -
                                                        51F-12345
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-map-marker-alt me-2" /> Chi nhánh:
                                                        123 Nguyễn Văn Linh, Q.7, TP.HCM
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-tools me-2" /> Thay dầu, kiểm tra
                                                        hệ thống phanh, kiểm tra đèn
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                    <span className="badge bg-success maintenance-status">
                      Hoàn thành
                    </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 mt-3">
                                            <button className="btn btn-outline-primary">
                                                Xem chi tiết
                                            </button>
                                            <button className="btn btn-primary">Đặt lịch tương tự</button>
                                        </div>
                                    </div>
                                    <div
                                        className="maintenance-schedule-card"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <div className="maintenance-date">02/10/2024 - 15:30</div>
                                                <h5>Bảo dưỡng định kỳ</h5>
                                                <div className="maintenance-details">
                                                    <p>
                                                        <i className="fas fa-car me-2" /> Toyota Camry -
                                                        51F-12345
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-map-marker-alt me-2" /> Chi nhánh:
                                                        123 Nguyễn Văn Linh, Q.7, TP.HCM
                                                    </p>
                                                    <p>
                                                        <i className="fas fa-tools me-2" /> Kiểm tra tổng thể,
                                                        thay lọc gió điều hòa, kiểm tra hệ thống treo
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                    <span className="badge bg-success maintenance-status">
                      Hoàn thành
                    </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 mt-3">
                                            <button className="btn btn-outline-primary">
                                                Xem chi tiết
                                            </button>
                                            <button className="btn btn-primary">Đặt lịch tương tự</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4" data-aos="fade-up">
                                <a href="#" className="btn btn-lg btn-primary">
                                    Đặt lịch bảo dưỡng mới
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Lịch sử sửa chữa */}
            <section id="repair-history" className="section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Lịch sử sửa chữa
                    </h2>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="repair-timeline">
                                <div className="repair-history-card" data-aos="fade-up">
                                    <div className="repair-date">15/03/2025</div>
                                    <h5 className="repair-title">Thay thế hệ thống phanh</h5>
                                    <p className="repair-description">
                                        Thay mới đĩa phanh trước và sau, thay dầu phanh, kiểm tra và
                                        điều chỉnh hệ thống phanh ABS.
                                    </p>
                                    <p className="repair-description">
                                        <strong>Kỹ thuật viên:</strong> Nguyễn Văn A
                                    </p>
                                    <p className="repair-cost">Chi phí: 4,500,000 VNĐ</p>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#repairDetailModal"
                                        >
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="repair-history-card"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="repair-date">10/12/2024</div>
                                    <h5 className="repair-title">Bảo dưỡng hệ thống điện</h5>
                                    <p className="repair-description">
                                        Kiểm tra và thay thế ắc quy, kiểm tra hệ thống đèn, kiểm tra và
                                        cài đặt lại hệ thống điện tử.
                                    </p>
                                    <p className="repair-description">
                                        <strong>Kỹ thuật viên:</strong> Trần Văn B
                                    </p>
                                    <p className="repair-cost">Chi phí: 2,800,000 VNĐ</p>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#repairDetailModal"
                                        >
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="repair-history-card"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="repair-date">05/08/2024</div>
                                    <h5 className="repair-title">Thay lọc gió và dầu động cơ</h5>
                                    <p className="repair-description">
                                        Thay dầu động cơ, lọc dầu, lọc gió, kiểm tra và vệ sinh hệ thống
                                        làm mát.
                                    </p>
                                    <p className="repair-description">
                                        <strong>Kỹ thuật viên:</strong> Lê Văn C
                                    </p>
                                    <p className="repair-cost">Chi phí: 1,500,000 VNĐ</p>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#repairDetailModal"
                                        >
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="repair-history-card"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <div className="repair-date">20/04/2024</div>
                                    <h5 className="repair-title">Cân chỉnh thước lái</h5>
                                    <p className="repair-description">
                                        Cân chỉnh thước lái, kiểm tra và điều chỉnh hệ thống treo, thay
                                        mới 4 lốp xe.
                                    </p>
                                    <p className="repair-description">
                                        <strong>Kỹ thuật viên:</strong> Phạm Văn D
                                    </p>
                                    <p className="repair-cost">Chi phí: 6,200,000 VNĐ</p>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#repairDetailModal"
                                        >
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4" data-aos="fade-up">
                                <a href="#" className="btn btn-primary">
                                    Tải xuống lịch sử chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Nhận báo giá */}
            <section id="quotes" className="section bg-light">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Nhận báo giá
                    </h2>
                    <div className="row">
                        <div className="col-lg-6 mb-4" data-aos="fade-right">
                            <div className="quote-form">
                                <h4 className="mb-4">Thông tin xe</h4>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="carBrand" className="form-label">
                                            Hãng xe
                                        </label>
                                        <select className="form-select" id="carBrand">
                                            <option selected="">Chọn hãng xe</option>
                                            <option>Toyota</option>
                                            <option>Honda</option>
                                            <option>Ford</option>
                                            <option>Hyundai</option>
                                            <option>Kia</option>
                                            <option>Mazda</option>
                                            <option>Mitsubishi</option>
                                            <option>Khác</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="carModel" className="form-label">
                                            Dòng xe
                                        </label>
                                        <select className="form-select" id="carModel">
                                            <option selected="">Chọn dòng xe</option>
                                            <option>Camry</option>
                                            <option>Corolla Cross</option>
                                            <option>Vios</option>
                                            <option>Fortuner</option>
                                            <option>Innova</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="carYear" className="form-label">
                                            Năm sản xuất
                                        </label>
                                        <select className="form-select" id="carYear">
                                            <option selected="">Chọn năm sản xuất</option>
                                            <option>2025</option>
                                            <option>2024</option>
                                            <option>2023</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>Trước 2016</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mileage" className="form-label">
                                            Số KM đã đi
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="mileage"
                                            placeholder="Nhập số km đã đi"
                                        />
                                    </div>
                                    <h4 className="mt-4 mb-3">Dịch vụ cần báo giá</h4>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="maintenance"
                                            />
                                            <label className="form-check-label" htmlFor="maintenance">
                                                Bảo dưỡng định kỳ
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="brakeSystem"
                                            />
                                            <label className="form-check-label" htmlFor="brakeSystem">
                                                Hệ thống phanh
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="airConditioning"
                                            />
                                            <label className="form-check-label" htmlFor="airConditioning">
                                                Điều hòa
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="engineCheck"
                                            />
                                            <label className="form-check-label" htmlFor="engineCheck">
                                                Kiểm tra động cơ
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="transmission"
                                            />
                                            <label className="form-check-label" htmlFor="transmission">
                                                Hộp số
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="suspension"
                                            />
                                            <label className="form-check-label" htmlFor="suspension">
                                                Hệ thống treo
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="repairDetails" className="form-label">
                                            Mô tả chi tiết vấn đề
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="repairDetails"
                                            rows={3}
                                            placeholder="Mô tả chi tiết vấn đề của xe"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <h4 className="mt-4 mb-3">Thông tin liên hệ</h4>
                                    <div className="mb-3">
                                        <label htmlFor="customerName" className="form-label">
                                            Họ tên
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="customerName"
                                            placeholder="Nhập họ tên"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="customerPhone" className="form-label">
                                            Số điện thoại
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="customerPhone"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="customerEmail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="customerEmail"
                                            placeholder="Nhập email"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg w-100 mt-3"
                                    >
                                        Nhận báo giá
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="quote-result">
                                <div className="text-center">
                                    <div className="note-icon">
                                        <i className="fas fa-clipboard-list" />
                                    </div>
                                    <h4 className="mb-3">Báo giá của bạn</h4>
                                    <p className="mb-4">
                                        Hoàn thành form bên cạnh để nhận báo giá chi tiết
                                    </p>
                                    <div className="quote-price">0 VNĐ</div>
                                    <p className="text-muted">
                                        Đây là báo giá ước tính ban đầu. Chi phí có thể thay đổi sau khi
                                        kiểm tra xe thực tế.
                                    </p>
                                </div>
                                <div className="quote-details mt-5 d-none">
                                    <h5 className="mb-3">Chi tiết báo giá</h5>
                                    <div className="quote-detail-item">
                                        <span className="quote-detail-title">Bảo dưỡng định kỳ</span>
                                        <span className="quote-detail-value">1,500,000 VNĐ</span>
                                    </div>
                                    <div className="quote-detail-item">
                                        <span className="quote-detail-title">Thay dầu động cơ</span>
                                        <span className="quote-detail-value">850,000 VNĐ</span>
                                    </div>
                                    <div className="quote-detail-item">
                                        <span className="quote-detail-title">Thay lọc dầu</span>
                                        <span className="quote-detail-value">250,000 VNĐ</span>
                                    </div>
                                    <div className="quote-detail-item">
                <span className="quote-detail-title">
                  Kiểm tra hệ thống phanh
                </span>
                                        <span className="quote-detail-value">300,000 VNĐ</span>
                                    </div>
                                    <div className="quote-detail-item">
                <span className="quote-detail-title">
                  Kiểm tra hệ thống điện
                </span>
                                        <span className="quote-detail-value">200,000 VNĐ</span>
                                    </div>
                                    <div className="quote-total">
                                        <span className="quote-total-title">Tổng cộng</span>
                                        <span className="quote-total-value">3,100,000 VNĐ</span>
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="text-muted small">
                                            * Giá đã bao gồm VAT và phí dịch vụ.
                                        </p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <a href="#" className="btn btn-primary">
                                                Đặt lịch ngay
                                            </a>
                                            <a href="#" className="btn btn-outline-primary">
                                                Lưu báo giá
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Phản hồi dịch vụ */}
            <section id="feedback" className="section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Phản hồi dịch vụ
                    </h2>
                    <div className="row">
                        <div className="col-lg-6 mb-4" data-aos="fade-right">
                            <div className="feedback-form">
                                <h4 className="mb-4">Đánh giá dịch vụ của chúng tôi</h4>
                                <form>
                                    <div className="mb-4">
                                        <label className="form-label">Đánh giá của bạn</label>
                                        <div className="rating mb-3">
                                            <input
                                                type="radio"
                                                name="rating"
                                                defaultValue={5}
                                                id="rating-5"
                                            />
                                            <label htmlFor="rating-5" />
                                            <input
                                                type="radio"
                                                name="rating"
                                                defaultValue={4}
                                                id="rating-4"
                                            />
                                            <label htmlFor="rating-4" />
                                            <input
                                                type="radio"
                                                name="rating"
                                                defaultValue={3}
                                                id="rating-3"
                                            />
                                            <label htmlFor="rating-3" />
                                            <input
                                                type="radio"
                                                name="rating"
                                                defaultValue={2}
                                                id="rating-2"
                                            />
                                            <label htmlFor="rating-2" />
                                            <input
                                                type="radio"
                                                name="rating"
                                                defaultValue={1}
                                                id="rating-1"
                                            />
                                            <label htmlFor="rating-1" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="serviceType" className="form-label">
                                            Loại dịch vụ
                                        </label>
                                        <select className="form-select" id="serviceType">
                                            <option selected="">Chọn dịch vụ</option>
                                            <option>Bảo dưỡng định kỳ</option>
                                            <option>Sửa chữa</option>
                                            <option>Thay thế phụ tùng</option>
                                            <option>Kiểm tra định kỳ</option>
                                            <option>Dịch vụ khác</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="serviceDate" className="form-label">
                                            Ngày sử dụng dịch vụ
                                        </label>
                                        <input type="date" className="form-control" id="serviceDate" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="feedbackTitle" className="form-label">
                                            Tiêu đề
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="feedbackTitle"
                                            placeholder="Nhập tiêu đề phản hồi"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="feedbackContent" className="form-label">
                                            Nội dung phản hồi
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="feedbackContent"
                                            rows={4}
                                            placeholder="Chia sẻ trải nghiệm của bạn về dịch vụ"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="employeeRating" className="form-label">
                                            Đánh giá về nhân viên phục vụ
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="employeeRating"
                                            rows={2}
                                            placeholder="Nhận xét về nhân viên phục vụ"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="feedbackSuggestion" className="form-label">
                                            Góp ý cải thiện dịch vụ
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="feedbackSuggestion"
                                            rows={2}
                                            placeholder="Góp ý để chúng tôi phục vụ tốt hơn"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="feedbackImage" className="form-label">
                                            Hình ảnh (nếu có)
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="feedbackImage"
                                            multiple=""
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="publicFeedback"
                                        />
                                        <label className="form-check-label" htmlFor="publicFeedback">
                                            Cho phép hiển thị phản hồi này trên website
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg w-100 mt-3"
                                    >
                                        Gửi phản hồi
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h4 className="mb-4">Phản hồi từ khách hàng</h4>
                            <div
                                className="customer-testimonial"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="testimonial-quote">
                                    <i className="fas fa-quote-left" />
                                </div>
                                <p className="testimonial-text">
                                    Tôi rất hài lòng với dịch vụ bảo dưỡng tại đây. Nhân viên làm việc
                                    chuyên nghiệp, tư vấn chi tiết và minh bạch về chi phí. Xe tôi
                                    được chăm sóc rất tốt.
                                </p>
                                <div className="testimonial-author">
                                    <img
                                        src="https://placehold.co/50x50/cccccc/666666?text=User"
                                        alt="Avatar"
                                    />
                                    <div>
                                        <h6 className="testimonial-author-name">Nguyễn Văn A</h6>
                                        <p className="testimonial-author-title">
                                            Khách hàng thân thiết
                                        </p>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="customer-testimonial"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="testimonial-quote">
                                    <i className="fas fa-quote-left" />
                                </div>
                                <p className="testimonial-text">
                                    Phục vụ nhanh chóng, giá cả hợp lý. Đội ngũ kỹ thuật viên có tay
                                    nghề cao và rất tận tâm với công việc. Sẽ tiếp tục sử dụng dịch vụ
                                    trong tương lai.
                                </p>
                                <div className="testimonial-author">
                                    <img
                                        src="https://placehold.co/50x50/cccccc/666666?text=User"
                                        alt="Avatar"
                                    />
                                    <div>
                                        <h6 className="testimonial-author-name">Trần Thị B</h6>
                                        <p className="testimonial-author-title">Khách hàng mới</p>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="customer-testimonial"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="testimonial-quote">
                                    <i className="fas fa-quote-left" />
                                </div>
                                <p className="testimonial-text">
                                    Địa điểm dễ tìm, cơ sở vật chất hiện đại, nhân viên thân thiện.
                                    Giá cả cạnh tranh so với các garage khác trong khu vực. Tôi rất
                                    hài lòng về dịch vụ.
                                </p>
                                <div className="testimonial-author">
                                    <img
                                        src="https://placehold.co/50x50/cccccc/666666?text=User"
                                        alt="Avatar"
                                    />
                                    <div>
                                        <h6 className="testimonial-author-name">Lê Văn C</h6>
                                        <p className="testimonial-author-title">Khách hàng</p>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <a href="#" className="btn btn-outline-primary">
                                    Xem thêm phản hồi
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Quy trình làm việc */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Quy trình làm việc
                    </h2>
                    <div className="step-process" data-aos="fade-up">
                        <div className="step active">
                            <div className="step-number">
                                <i className="fas fa-calendar-check" />
                            </div>
                            <h5 className="step-title">Đặt lịch</h5>
                            <p className="step-description">
                                Đặt lịch hẹn qua website hoặc hotline
                            </p>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <i className="fas fa-car" />
                            </div>
                            <h5 className="step-title">Tiếp nhận xe</h5>
                            <p className="step-description">
                                Kiểm tra tổng quan và xác nhận yêu cầu
                            </p>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <i className="fas fa-tools" />
                            </div>
                            <h5 className="step-title">Bảo dưỡng</h5>
                            <p className="step-description">
                                Tiến hành bảo dưỡng, sửa chữa theo yêu cầu
                            </p>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <i className="fas fa-clipboard-check" />
                            </div>
                            <h5 className="step-title">Kiểm tra</h5>
                            <p className="step-description">
                                Kiểm tra chất lượng sau khi hoàn thành
                            </p>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <i className="fas fa-handshake" />
                            </div>
                            <h5 className="step-title">Bàn giao</h5>
                            <p className="step-description">
                                Bàn giao xe và giải thích công việc đã thực hiện
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">
                        Liên hệ
                    </h2>
                    <div className="row">
                        <div className="col-lg-4 mb-4" data-aos="fade-right">
                            <h4 className="mb-4">Thông tin liên hệ</h4>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt" />
                                </div>
                                <div className="contact-details">
                                    <h5>Địa chỉ</h5>
                                    <p>123 Nguyễn Văn Linh, Quận 7, TP.HCM</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fas fa-phone-alt" />
                                </div>
                                <div className="contact-details">
                                    <h5>Hotline</h5>
                                    <p>(028) 1234 5678</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope" />
                                </div>
                                <div className="contact-details">
                                    <h5>Email</h5>
                                    <p>info@autocare.vn</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fas fa-clock" />
                                </div>
                                <div className="contact-details">
                                    <h5>Giờ làm việc</h5>
                                    <p>
                                        Thứ 2 - Thứ 7: 8:00 - 18:00
                                        <br />
                                        Chủ nhật: 8:00 - 12:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" data-aos="fade-left">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mb-4">Gửi tin nhắn cho chúng tôi</h4>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="contactName" className="form-label">
                                                    Họ tên
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="contactName"
                                                    placeholder="Nhập họ tên"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="contactPhone" className="form-label">
                                                    Số điện thoại
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="contactPhone"
                                                    placeholder="Nhập số điện thoại"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactEmail" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="contactEmail"
                                                placeholder="Nhập email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactSubject" className="form-label">
                                                Tiêu đề
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="contactSubject"
                                                placeholder="Nhập tiêu đề"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactMessage" className="form-label">
                                                Nội dung
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="contactMessage"
                                                rows={5}
                                                placeholder="Nhập nội dung tin nhắn"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Gửi tin nhắn
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12" data-aos="zoom-in">
                            <div className="card">
                                <div className="card-body p-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9551992523186!2d106.70093007617263!3d10.73188876283156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7d37ddb773%3A0x19ce735ed71e2691!2zMTIzIE5ndXnhu4VuIFbEg24gTGluaCwgVMOibiBQaMO6LCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1695034625030!5m2!1svi!2s"
                                        width="100%"
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer></Footer>
            {/* Repair Detail Modal */}
            <div
                className="modal fade"
                id="repairDetailModal"
                tabIndex={-1}
                aria-labelledby="repairDetailModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="repairDetailModalLabel">
                                Chi tiết sửa chữa
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <h6>Thông tin chung</h6>
                                        <p>
                                            <strong>Ngày thực hiện:</strong> 15/03/2025
                                        </p>
                                        <p>
                                            <strong>Mã phiếu sửa chữa:</strong> SC-15032025
                                        </p>
                                        <p>
                                            <strong>Xe:</strong> Toyota Camry - 51F-12345
                                        </p>
                                        <p>
                                            <strong>Số km:</strong> 25,780 km
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Thông tin kỹ thuật viên</h6>
                                        <p>
                                            <strong>Kỹ thuật viên chính:</strong> Nguyễn Văn A
                                        </p>
                                        <p>
                                            <strong>Trưởng ca:</strong> Trần Văn B
                                        </p>
                                        <p>
                                            <strong>Kiểm tra chất lượng:</strong> Lê Văn C
                                        </p>
                                    </div>
                                </div>
                                <h6 className="mb-3">Chi tiết công việc</h6>
                                <div className="table-responsive mb-4">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Công việc</th>
                                            <th>Vật tư/Phụ tùng</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Thay đĩa phanh trước</td>
                                            <td>Đĩa phanh Toyota Genuine</td>
                                            <td>2</td>
                                            <td>800,000</td>
                                            <td>1,600,000</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Thay đĩa phanh sau</td>
                                            <td>Đĩa phanh Toyota Genuine</td>
                                            <td>2</td>
                                            <td>750,000</td>
                                            <td>1,500,000</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Thay dầu phanh</td>
                                            <td>Dầu phanh DOT4</td>
                                            <td>1</td>
                                            <td>350,000</td>
                                            <td>350,000</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Kiểm tra và điều chỉnh ABS</td>
                                            <td>Công kiểm tra</td>
                                            <td>1</td>
                                            <td>300,000</td>
                                            <td>300,000</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={5} className="text-end">
                                                <strong>Tổng tiền phụ tùng:</strong>
                                            </td>
                                            <td>3,450,000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className="text-end">
                                                <strong>Công thợ:</strong>
                                            </td>
                                            <td>750,000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className="text-end">
                                                <strong>VAT (10%):</strong>
                                            </td>
                                            <td>300,000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className="text-end">
                                                <strong>Tổng cộng:</strong>
                                            </td>
                                            <td className="fw-bold">4,500,000</td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Ghi chú kỹ thuật</h6>
                                        <p>
                                            - Đĩa phanh trước và sau đã bị mòn quá mức cho phép, cần thay
                                            thế.
                                        </p>
                                        <p>
                                            - Hệ thống phanh ABS hoạt động bình thường sau khi điều chỉnh.
                                        </p>
                                        <p>- Khuyến nghị kiểm tra lại sau 5,000 km.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Bảo hành</h6>
                                        <p>
                                            - Phụ tùng: 12 tháng hoặc 20,000 km (tùy điều kiện nào đến
                                            trước).
                                        </p>
                                        <p>- Công thợ: 3 tháng hoặc 5,000 km.</p>
                                        <p>- Ngày hết hạn bảo hành: 15/03/2026</p>
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
                            <button type="button" className="btn btn-primary">
                                In chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customer;
