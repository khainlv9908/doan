import React, { useState } from "react";
import styles from "./authForm.module.css";
import axios from "axios";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
    setMessage(""); // clear message khi chuyển form
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoginForm
      ? "http://localhost:5000/api/user/login"
      : "http://localhost:5000/api/user/register";

    try {
      const res = await axios.post(url, formData);
      if (isLoginForm) {
        setMessage("Đăng nhập thành công!");
        // lưu token nếu cần
        localStorage.setItem("token", res.data.token);
      } else {
        setMessage("Đăng ký thành công!");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Đã có lỗi xảy ra");
    }
  };

  return (
    <div className={styles.authContainer}>
      <div
        className={`${styles.container} ${
          isLoginForm ? "" : styles.containerActive
        }`}
      >
        {/* Đăng ký */}
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form onSubmit={handleSubmit}>
            <h1>Tạo tài khoản</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>hoặc sử dụng email để đăng ký</span>
            <input
              type="text"
              name="name"
              placeholder="Họ tên"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={handleChange}
              required
            />
            <button type="submit">Đăng ký</button>
            <p>{!isLoginForm && message}</p>
          </form>
        </div>

        {/* Đăng nhập */}
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form onSubmit={handleSubmit}>
            <h1>Đăng nhập</h1>
            <div className={styles.socialIcons}>{/* Social icons */}</div>
            <span>hoặc sử dụng email và mật khẩu</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={handleChange}
              required
            />
            <a href="/forgot">Quên mật khẩu?</a>
            <button type="submit">Đăng nhập</button>
            <p>{isLoginForm && message}</p>
          </form>
        </div>

        {/* Toggle panels */}
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <h1>Chào mừng trở lại!</h1>
              <p>Đăng nhập để sử dụng tất cả tính năng của ứng dụng</p>
              <button className={styles.hidden} onClick={switchForm}>
                Đăng nhập
              </button>
            </div>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1>Xin chào!</h1>
              <p>Đăng ký để bắt đầu hành trình với chúng tôi</p>
              <button className={styles.hidden} onClick={switchForm}>
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
