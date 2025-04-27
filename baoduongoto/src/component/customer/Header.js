import React from "react";
import "./customer.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    AutoCare
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#hero">
                                Trang chủ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#maintenance">
                                Lịch bảo dưỡng
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#repair-history">
                                Lịch sử sửa chữa
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#quotes">
                                Báo giá
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#feedback">
                                Phản hồi
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary ms-lg-3" href="#contact">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

