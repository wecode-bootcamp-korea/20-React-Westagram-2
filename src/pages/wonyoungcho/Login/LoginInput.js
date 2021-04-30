import React from 'react';

class LoginInput extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: `${event.target.value}`,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: `${event.target.value}`,
    });
  };
}

export default LoginInput;
