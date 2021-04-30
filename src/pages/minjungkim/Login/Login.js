import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  goToMain = () => {
    this.props.history.push('/mainmjk');
  };
  render() {
    return (
      <div className="login_mjk">
        <main>
          <h1 className="logo">Westagram</h1>
          <div className="login_form">
            <div className="login_data">
              <LoginForm />
              <span className="display_password">비밀번호 표시</span>
              <span className="hide_password">숨기기</span>
            </div>
            <button id="login_btn" onClick={this.goToMain}>
              로그인
            </button>
          </div>
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

export default withRouter(Login);
