import React from 'react';
import { withRouter } from 'react-router-dom';
import './Button.scss';

class Button extends React.Component {
  goToMain = () => {
    this.props.history.push('/maindsl');
  };

  render() {
    return (
      <button className="loginBtn" onClick={this.goToMain}>
        로그인
      </button>
    );
  }
}

export default withRouter(Button);
