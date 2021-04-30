import React, { Component } from 'react';
import SideboxHeader from './SideboxHeader';
import SideboxContainer from './SideboxContainer';

class Sidebox extends Component {
  render() {
    return (
      <div className="sidebox">
        <SideboxHeader />
        <SideboxContainer />
      </div>
    );
  }
}

export default Sidebox;
