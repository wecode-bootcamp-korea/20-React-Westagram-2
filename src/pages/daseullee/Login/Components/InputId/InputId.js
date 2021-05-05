import React from 'react';
import './InputId.scss';

class InputId extends React.Component {
  render() {
    return (
      <section className="inputId">
        <input
          className="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.props.getInput}
          name="idValue"
        />
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호"
          onChange={this.props.getInput}
          name="pwValue"
        />
      </section>
    );
  }
}

export default InputId;
