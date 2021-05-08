import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginData extends Component {
  state = {
    loginId: '',
    loginPassword: '',
  };

  handleValueChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkValidation = () => {
    const { loginId, loginPassword } = this.state;
    const reg = /^\d{3}[. -]?\d{3,4}[. -]?\d{4}$|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+|^[a-zA-Z ]+$/;
    const isValidId = reg.test(loginId);
    const isValidPw = loginPassword.length > 5;

    return isValidId && isValidPw;
  };

  goToMain = e => {
    e.preventDefault();
    const url = 'http://10.58.0.184:8000/user/signin';
    const option = {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.loginId,
        password: this.state.loginPassword,
        nickname: '하민정조6',
        phonenumber: '015-1111-2222',
      }),
    };

    fetch(url, option)
      .then(res => res.json())
      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          localStorage.setItem('token', data.token);
          this.props.history.push('/mainmjk');
        }
      });
  };

  render() {
    return (
      <div className="login_data">
        <input
          name="loginId"
          onChange={this.handleValueChange}
          type="text"
          className="inputForm"
          id="id"
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

export default withRouter(LoginData);
