import React from 'react';
// import { withRouter } from 'react-router-dom';
import './Button.scss';

class Button extends React.Component {
  goToMain = () => {
    const { idValue, pwValue } = this.props;
    fetch('http://10.58.1.59:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue, //백엔드와 통신시 key값이 같이야한다.
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        result.message === 'SUCCESS'
          ? this.props.history.push('/maindsl')
          : alert('회원가입 실패');
      });
  };

  render() {
    return (
      <button
        className={this.props.changeColor ? 'changeColorBtn' : 'loginBtn'}
        onClick={this.goToMain} //여기서 fetch함수 실행
      >
        로그인
      </button>
    );
  }
}

export default Button;
