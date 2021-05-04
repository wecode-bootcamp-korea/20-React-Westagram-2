import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      id: '',
      pw: '',
      btnClassName: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/mainyrk');
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, pw } = this.state;
    return (
      <main className="loginyrk">
        <h1 className="logoText">Westagram</h1>
        <form className="loginForm" name="login">
          <input
            onChange={this.handleInput}
            className="idName loginInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="id"
          />
          <input
            onChange={this.handleInput}
            className="pw loginInput"
            type="password"
            placeholder="비밀번호"
            name="pw"
          />
          <button
            disabled={id.includes('@') && 5 <= pw.length ? false : true}
            className={id.includes('@') && 5 <= pw.length ? 'activeBtn' : ''}
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
