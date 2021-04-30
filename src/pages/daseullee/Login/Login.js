import React from 'react';
import InputId from './Components/InputId/InputId';
import Button from './Components/Button/Button';
import './Login.scss';
import '../Style/Common.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="loginSection">
        <header className="westaLogo">Westagram</header>
        <InputId />
        <Button />
        <footer>비밀번호를 잊으셨나요?</footer>
      </div>
    );
  }
}

export default Login;
