import React from "react";

import "./customer.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h5 className="footer-title">AutoCare</h5>
                        <p>
                            Chúng tôi cung cấp dịch vụ bảo dưỡng và sửa chữa ô tô chuyên nghiệp,
                            uy tín với đội ngũ kỹ thuật viên lành nghề và trang thiết bị hiện
                            đại.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-4">
                        <h5 className="footer-title">Liên kết nhanh</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="#hero">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#services">Dịch vụ</a>
                            </li>
                            <li>
                                <a href="#maintenance">Lịch bảo dưỡng</a>
                            </li>
                            <li>
                                <a href="#repair-history">Lịch sử sửa chữa</a>
                            </li>
                            <li>
                                <a href="#quotes">Báo giá</a>
                            </li>
                            <li>
                                <a href="#feedback">Phản hồi</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h5 className="footer-title">Dịch vụ</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Bảo dưỡng định kỳ</a>
                            </li>
                            <li>
                                <a href="#">Sửa chữa tổng thể</a>
                            </li>
                            <li>
                                <a href="#">Thay thế phụ tùng</a>
                            </li>
                            <li>
                                <a href="#">Dịch vụ cứu hộ</a>
                            </li>
                            <li>
                                <a href="#">Kiểm tra &amp; chẩn đoán</a>
                            </li>
                            <li>
                                <a href="#">Bảo hiểm ô tô</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h5 className="footer-title">Liên hệ</h5>
                        <ul className="footer-links">
                            <li>
                                <i className="fas fa-map-marker-alt me-2" /> 123 Nguyễn Văn Linh,
                                Q.7, TP.HCM
                            </li>
                            <li>
                                <i className="fas fa-phone-alt me-2" /> (028) 1234 5678
                            </li>
                            <li>
                                <i className="fas fa-envelope me-2" /> info@autocare.vn
                            </li>
                            <li>
                                <i className="fas fa-clock me-2" /> 8:00 - 18:00, Thứ 2 - Thứ 7
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2025 AutoCare. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

