import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    loginId: '',
    loginPassword: '',
  };

  handleValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkValidation = () => {
    const reg = /^\d{3}[. -]?\d{3,4}[. -]?\d{4}$|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+|[a-zA-Z ]+/;
    const isValidId = reg.test(this.state.loginId);
    const isValidPw = this.state.loginPassword.length > 5;

    return isValidId && isValidPw;
  };

  goToMain = () => {
    this.props.history.push('/mainmjk');
  };

  render() {
    return (
      <div className="login_data">
        <input
          name="loginId"
          onChange={this.handleValueChange}
          type="text"
          className="inputForm"
          id="user_id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          autoComplete="off"
          autoFocus
        />
        <input
          name="loginPassword"
          onChange={this.handleValueChange}
          type="password"
          className="inputForm"
          id="password"
          placeholder="비밀번호"
        />
        <span className="display_password">비밀번호 표시</span>
        <span className="hide_password">숨기기</span>
        <button
          className={this.checkValidation() && 'active'}
          id="login_btn"
          onClick={this.goToMain}
          disabled={!this.checkValidation()}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default withRouter(LoginForm);
