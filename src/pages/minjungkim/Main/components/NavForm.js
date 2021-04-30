import React, { Component } from 'react';
import NavSearchResult from './NavSearchResult';

class MainForm extends Component {
  render() {
    return (
      <form className="nav_search">
        <input className="nav_input" type="text" placeholder="검색" />
        <i className="fas fa-search"></i>
        <i className="fas fa-times-circle"></i>
        <NavSearchResult />
      </form>
    );
  }
}

export default MainForm;
