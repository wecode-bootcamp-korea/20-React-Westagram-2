import React from 'react';
import './InputId.scss';

class InputId extends React.Component {
  constructor() {
    super();

    // 초기 상태값
    this.state = {
      id: '',
      pw: '',
    };
  }

  // handleIdInput 함수 정의
  // 이벤트 실행시 다음 함수 실행
  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    console.log(this.state);

    // console.log(this.state.pw);

    return (
      <section className="inputId">
        <input
          className="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleIdInput}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
        />
      </section>
    );
  }
}

export default InputId;
