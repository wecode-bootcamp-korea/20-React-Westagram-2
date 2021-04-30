import React, { Component } from 'react';

class NavSearchResultHeader extends Component {
  render() {
    return (
      <div className="search_result_header">
        <span className="search_history">최근 검색 항목</span>
        <span className="search_history_delete">모두 지우기</span>
      </div>
    );
  }
}

export default NavSearchResultHeader;
