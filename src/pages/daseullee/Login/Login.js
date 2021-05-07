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

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      inputValue: { ...this.state.inputValue, [name]: value },
    });
  };

  handleAbleButton = () => {
    const { buttonOn } = this.state;
    this.setState({
      isButtonOn:
        buttonOn.inputValue.idValue.includes('@') &&
        buttonOn.inputValue.pwValue.length >= 8, //위조건을 만족시 true리턴
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputValue !== prevState.inputValue) {
      this.handleAbleButton();
    }
  }

  render() {
    const { valueState } = this.state;
    return (
      <div className="loginSection">
        <header>Westagram</header>
        <InputId getInput={this.handleInput} />
        <Button
          idValue={valueState.inputValue.idValue}
          pwValue={valueState.inputValue.pwValue}
          changeColor={this.state.isButtonOn}
        />
        <footer>비밀번호를 잊으셨나요?</footer>
      </div>
    );
  }
}

export default Login;
