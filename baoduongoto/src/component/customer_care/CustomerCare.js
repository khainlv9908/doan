import React, {useEffect, useRef, useCallback} from "react";
import "./customerCare.css"
import Footer from "../customer/Footer";
import Header from "../customer/Header";

const CustomerCare = () => {
    // Tạo ref callback để thu thập các phần tử fade-in
    const fadeElements = useRef([]);
    const counters = useRef([]);

    // Hàm callback để thu thập các phần tử fade-in
    const addToFadeElements = useCallback(el => {
        if (el && !fadeElements.current.includes(el)) {
            fadeElements.current.push(el);
        }
    }, []);

    // Hàm callback để thu thập các phần tử counter
    const addToCounters = useCallback(el => {
        if (el && !counters.current.includes(el)) {
            counters.current.push(el);
        }
    }, []);

    useEffect(() => {
        // Fade-in animation on scroll
        const fadeInOnScroll = () => {
            fadeElements.current.forEach((element) => {
                if (!element) return;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", fadeInOnScroll);
        fadeInOnScroll(); // Initial check on load

        // Counter animation
        counters.current.forEach((counter) => {
            if (!counter) return;
            const target = parseInt(counter.innerText);
            counter.innerText = "0";

            const updateCounter = () => {
                const count = +counter.innerText;
                const increment = target / 100;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(counter);
        });

        return () => {
            window.removeEventListener("scroll", fadeInOnScroll);
        };
    }, []);

    return(
        <>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 animate__animated animate__fadeInLeft">
                            <h1 className="display-4 fw-bold mb-4">
                                Chăm sóc khách hàng chuyên nghiệp
                            </h1>
                            <p className="lead mb-4">
                                Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng với
                                các dịch vụ chăm sóc toàn diện.
                            </p>
                            <a href="#contact" className="btn btn-light btn-lg pulse">
                                Liên hệ ngay
                            </a>
                        </div>
                        <div className="col-lg-6 animate__animated animate__fadeInRight">
                            <img
                                src="/images/abc.png"
                                alt="Customer Support"
                                className="img-fluid rounded float"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-5" id="services">
                <div className="container">
                    <div className="text-center mb-5 fade-in" ref={addToFadeElements}>
                        <h2 className="fw-bold">Dịch vụ của chúng tôi</h2>
                        <p className="lead text-muted">
                            Chúng tôi cung cấp đa dạng các dịch vụ chăm sóc khách hàng
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-md-4">
                            <div className="service-card p-4 text-center fade-in" ref={addToFadeElements}>
                                <div className="service-icon float">
                                    <i className="fas fa-comment-dots" />
                                </div>
                                <h4>Gửi lời nhắc</h4>
                                <p>
                                    Dịch vụ nhắc nhở lịch hẹn, thanh toán và các sự kiện quan trọng
                                    dành cho khách hàng.
                                </p>
                                <a href="#" className="btn btn-primary mt-3 pulse">
                                    Tìm hiểu thêm
                                </a>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-md-4">
                            <div className="service-card p-4 text-center fade-in" ref={addToFadeElements}>
                                <div className="service-icon float">
                                    <i className="fas fa-calendar-check" />
                                </div>
                                <h4>Đặt lịch hẹn</h4>
                                <p>
                                    Đặt lịch hẹn trực tuyến với đội ngũ chăm sóc khách hàng một cách
                                    nhanh chóng và tiện lợi.
                                </p>
                                <a href="#" className="btn btn-primary mt-3 pulse">
                                    Tìm hiểu thêm
                                </a>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-md-4">
                            <div className="service-card p-4 text-center fade-in" ref={addToFadeElements}>
                                <div className="service-icon float">
                                    <i className="fas fa-headset" />
                                </div>
                                <h4>Tiếp nhận yêu cầu</h4>
                                <p>
                                    Tiếp nhận và xử lý mọi yêu cầu từ khách hàng một cách nhanh chóng
                                    và hiệu quả.
                                </p>
                                <a href="#" className="btn btn-primary mt-3 pulse">
                                    Tìm hiểu thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded shadow-sm fade-in" ref={addToFadeElements}>
                                <h2 className="display-4 fw-bold text-primary animate__animated animate__fadeIn">
                                    <span className="counter" ref={addToCounters}>98</span>%
                                </h2>
                                <p className="lead">Khách hàng hài lòng</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded shadow-sm fade-in" ref={addToFadeElements}>
                                <h2 className="display-4 fw-bold text-primary animate__animated animate__fadeIn">
                                    <span className="counter" ref={addToCounters}>24</span>/7
                                </h2>
                                <p className="lead">Hỗ trợ không ngừng nghỉ</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded shadow-sm fade-in" ref={addToFadeElements}>
                                <h2 className="display-4 fw-bold text-primary animate__animated animate__fadeIn">
                                    <span className="counter" ref={addToCounters}>5000</span>+
                                </h2>
                                <p className="lead">Khách hàng phục vụ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-5" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="form-section fade-in" ref={addToFadeElements}>
                                <h2 className="text-center mb-4">Liên hệ với chúng tôi</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Họ và tên
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">
                                            Số điện thoại
                                        </label>
                                        <input type="tel" className="form-control" id="phone" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="service" className="form-label">
                                            Dịch vụ quan tâm
                                        </label>
                                        <select className="form-select" id="service">
                                            <option value="">Chọn dịch vụ</option>
                                            <option value="reminder">Gửi lời nhắc</option>
                                            <option value="appointment">Đặt lịch hẹn</option>
                                            <option value="request">Tiếp nhận yêu cầu</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">
                                            Nội dung
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows={5}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg pulse">
                                            Gửi yêu cầu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer></Footer>
        </>
    );
};

export default CustomerCare;