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

  loginClick = () => {
    console.log(this.state.idInputValue);
    fetch('http://10.58.7.181:8000/user/login', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        email: this.state.idInputValue,
        password: this.state.pwInputValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert(result.message);
        if (result.message === 'SUCCESS') {
          this.props.history.push('/Mainwyc');
        }
        localStorage.setItem('access-token', result.ACCESS_TOKEN);
      });
  };

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  checkValidation = () => {
    const regexr = /^\d{3}[. -]?\d{3,4}[. -]?\d{4}$|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+|[a-zA-Z ]+/;
    if (
      regexr.test(this.state.idInputValue) &&
      this.state.pwInputValue.length > 5
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
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
                onChange={this.handleInput}
              />
              <input
                className="loginPassword"
                type="password"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
              <button
                className={this.checkValidation() && 'active'}
                disabled={!this.checkValidation}
                onClick={this.loginClick}
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
