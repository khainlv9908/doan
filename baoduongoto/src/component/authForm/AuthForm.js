import React, { useState } from "react";
import styles from "./authForm.module.css";

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className={styles.authContainer}>
            <div className={`${styles.container} ${isLoginForm ? "" : styles.containerActive}`}>
                <div className={`${styles.formContainer} ${styles.signUp}`}>
                    <form>
                        <h1>Tạo tài khoản</h1>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>hoặc sử dụng email để đăng ký</span>
                        <input type="text" placeholder="Họ tên" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <button>Đăng ký</button>
                    </form>
                </div>
                <div className={`${styles.formContainer} ${styles.signIn}`}>
                    <form>
                        <h1>Đăng nhập</h1>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
                            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>hoặc sử dụng email và mật khẩu</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <a href="#">Quên mật khẩu?</a>
                        <button>Đăng nhập</button>
                    </form>
                </div>
                <div className={styles.toggleContainer}>
                    <div className={styles.toggle}>
                        <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                            <h1>Chào mừng trở lại!</h1>
                            <p>Đăng nhập để sử dụng tất cả tính năng của ứng dụng</p>
                            <button className={styles.hidden} onClick={switchForm}>Đăng nhập</button>
                        </div>
                        <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                            <h1>Xin chào!</h1>
                            <p>Đăng ký để bắt đầu hành trình với chúng tôi</p>
                            <button className={styles.hidden} onClick={switchForm}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
