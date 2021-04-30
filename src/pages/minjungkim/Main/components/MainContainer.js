import React, { Component } from 'react';
import Aside from './Aside';
import Section from './Section';

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
