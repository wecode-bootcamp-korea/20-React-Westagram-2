import React from 'react';
import InputId from './Components/InputId/InputId';
import Button from './Components/Button/Button';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: { idValue: '', pwValue: '' },
      isButtonOn: false,
    };
  }

  handleIdInput = e => {
    this.setState({
      inputValue: { ...this.state.inputValue, idValue: e.target.value },
    });
  };

  handlePwInput = e => {
    this.setState({
      inputValue: { ...this.state.inputValue, pwValue: e.target.value },
    });
  };

  handleAbleButton = () => {
    this.setState({
      isButtonOn:
        this.state.inputValue.idValue.includes('@') &&
        this.state.inputValue.pwValue.length >= 5, //위조건을 만족시 true리턴
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputValue !== prevState.inputValue) {
      this.handleAbleButton();
    }
  }

  render() {
    console.log(this.state.isButtonOn);
    return (
      <div className="loginSection">
        <header className="westaLogo">Westagram</header>
        <InputId
          id={this.state.inputValue.idValue}
          pw={this.state.inputValue.pwValue}
          getIdInput={this.handleIdInput}
          getPwInput={this.handlePwInput}
        />
        <Button changeColor={this.state.isButtonOn} />
        <footer>비밀번호를 잊으셨나요?</footer>
      </div>
    );
  }
}

export default Login;
