import React, { Component } from 'react';
import NavSearchLists from './NavSearchLists';
import NavSearchResultHeader from './NavSearchResultHeader';

class NavSearchResult extends Component {
  render() {
    return (
      <div className="nav_search_result">
        <NavSearchResultHeader />
        <NavSearchLists />
      </div>
    );
  }
}

export default NavSearchResult;
