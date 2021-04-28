import React from 'react';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Mainwyc');
  };

  render() {
    return (
      <div className="Login">
        <main className="mainLogin">
          <div className="loginBox">
            <header className="loginHeaderContainer">
              <h1 className="loginHeader">Westagram</h1>
            </header>
            <form className="loginForm" action="">
              <input
                className="loginName"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="loginPassword"
                type="password"
                placeholder="비밀번호"
              />
              <button
                className="loginButton"
                onClick={this.goToMain}
                type="button"
              >
                로그인
              </button>
            </form>
            <div className="forgotPassword">
              <a href="/#">
                <span>비밀번호를 잊으셨나요?</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
