import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      idValue: '',
      pwValue: '',
      btnClassName: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/mainyrk');
  };

  handleIdInput = e => {
    this.setState({ idValue: e.target.value });
  };

  handlePwInput = e => {
    this.setState({ pwValue: e.target.value });
  };

  render() {
    return (
      <main className="login">
        <h1 className="logoText">Westagram</h1>
        <form className="loginForm" name="login">
          <input
            onChange={this.handleIdInput}
            className="idName loginInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            className="pw loginInput"
            type="password"
            placeholder="비밀번호"
          />
          <button
            disabled={
              this.state.idValue.includes('@') && 5 <= this.state.pwValue.length
                ? false
                : true
            }
            className={
              this.state.idValue.includes('@') && 5 <= this.state.pwValue.length
                ? 'activeBtn'
                : ''
            }
            onClick={this.goToMain}
          >
            로그인
          </button>
        </form>
        <Link to="/mainyrk">회원가입</Link>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </main>
    );
  }
}

export default withRouter(Login);
