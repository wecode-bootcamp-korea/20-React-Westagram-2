import React, { Component } from 'react';

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

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default LoginForm;
