import React, { Component } from 'react';

class NavSearchResult extends Component {
  render() {
    return (
      <div className="search">
        <div className="search_result">
          <span className="search_history">최근 검색 항목</span>
          <span className="search_history_delete">모두 지우기</span>
        </div>
        {/* 결과는 여기? */}
      </div>
    );
  }
}

export default NavSearchResult;
