import React, { Component } from 'react';
import SideboxContainer from './SideboxContainer';

class Sidebox extends Component {
  render() {
    return (
      <div className="sidebox">
        <div className="sidebox_header">
          <span className="sidebox_title">스토리</span>
          <span className="sidebox_show_all">모두 보기</span>
        </div>
        <SideboxContainer />
      </div>
    );
  }
}

export default Sidebox;
