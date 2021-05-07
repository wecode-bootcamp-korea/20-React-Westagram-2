import React, { Component } from 'react';
import Section from './Section';
import Aside from './Aside';
import './MainContainer.scss';

class MainContainer extends Component {
  render() {
    return (
      <div className="main_container">
        <Section />
        <Aside />
      </div>
    );
  }
}

export default MainContainer;
