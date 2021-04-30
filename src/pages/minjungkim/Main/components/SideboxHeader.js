import React, { Component } from 'react';

class SideboxHeader extends Component {
  render() {
    return (
      <div className="sidebox_header">
        <span className="sidebox_title">스토리</span>
        <span className="sidebox_show_all">모두 보기</span>
      </div>
    );
  }
}

export default SideboxHeader;
