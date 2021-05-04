import React, { Component } from 'react';
import NavSearchResultHeader from './NavSearchResultHeader';
import NavSearchLists from './NavSearchLists';

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
