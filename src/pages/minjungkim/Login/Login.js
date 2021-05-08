import React, { Component } from 'react';
import LoginData from './components/LoginData';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login_mjk">
        <main className="main">
          <h1 className="logo">Westagram</h1>
          <LoginData />
          <div className="login_alternative">또는</div>
          <div className="login_facebook">
            <a href="https://ko-kr.facebook.com/">
              <i className="fab fa-facebook-square"></i>
              Facebook으로 로그인
            </a>
          </div>
          <a
            className="forgot_password"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </main>
      </div>
    );
  }
}

export default Login;
