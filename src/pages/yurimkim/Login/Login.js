import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.0.20:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result === 'SUCCESS') {
          this.props.history.push('/mainyrk');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const isValid = email.includes('@') && 5 <= password.length;
    return (
      <main className="loginyrk">
        <h1 className="logoText">Westagram</h1>
        <form className="loginForm">
          <input
            onChange={this.handleInput}
            className="loginInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="email"
          />
          <input
            onChange={this.handleInput}
            className="loginInput"
            type="password"
            placeholder="비밀번호"
            name="password"
          />
          <button
            disabled={isValid ? false : true}
            className={isValid ? 'activeBtn' : ''}
            onClick={this.goToMain}
          >
            로그인
          </button>
        </form>
        <Link to="/ mainyrk"> 회원 가입 </Link>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </main>
    );
  }
}

export default withRouter(Login);
