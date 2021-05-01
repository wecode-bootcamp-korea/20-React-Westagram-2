import React from 'react';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Mainwyc');
  };

  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: event.target.value,
    });
  };

  render() {
    // console.log(this.state.idInputValue);
    // // console.log(this.state.pwInputValue);
    return (
      <div className="Loginwyc">
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
                onChange={this.handleIdInput}
              />
              <input
                className="loginPassword"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
              <button
                className={
                  this.state.idInputValue.indexOf('@') !== -1 &&
                  this.state.pwInputValue.length >= 5
                    ? 'changeButtonColor'
                    : 'normalButtonColor'
                }
                disabled={
                  this.state.idInputValue.indexOf('@') !== -1 &&
                  this.state.pwInputValue.length >= 5
                    ? false
                    : true
                }
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
