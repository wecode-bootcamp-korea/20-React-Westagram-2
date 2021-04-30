import React, { Component } from 'react';
import Friend from './Friend';

class SideboxContainer extends Component {
  render() {
    return (
      <div className="sidebox_container">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    );
  }
}

export default SideboxContainer;
