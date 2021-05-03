import React from 'react';
import { withRouter } from 'react-router-dom';
import './Button.scss';

// 로그인 버튼 활성화
// 조건 : ID는 @포함, Pw는 5글자 이상시 활성화
// 삼항연산자 사용

class Button extends React.Component {
  goToMain = () => {
    // this.props.history.push('/maindsl');
  };

  render() {
    return (
      <button
        className={this.props.test ? 'changeColorBtn' : 'loginBtn'}
        onClick={this.goToMain}
      >
        로그인
      </button>
    );
  }
}

export default withRouter(Button);
