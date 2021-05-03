import React from 'react';
import './InputId.scss';

class InputId extends React.Component {
  // constructor() {
  //   super();

  //   // 초기 상태값
  //   this.state = {
  //     id: '',
  //     pw: '',
  //   };
  // }

  // handleIdInput 함수 정의
  // 이벤트 실행시 다음 함수 실행
  // handleIdInput = e => {
  //   this.setState({
  //     id: e.target.value,
  //   });
  // };

  // handlePwInput = e => {
  //   this.setState({
  //     pw: e.target.value,
  //   });
  // };

  render() {
    return (
      <section className="inputId">
        <input
          className="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.props.getIdInput}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호"
          onChange={this.props.getPwInput}
        />
      </section>
    );
  }
}

export default InputId;
