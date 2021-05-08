import React, { Component } from 'react';
import NavSearchResult from './NavSearchResult';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  state = {
    isClicked: false,
    keyword: '',
  };

  handleActive = e => {
    const { isClicked } = this.state;
    e.preventDefault();
    this.setState({
      isClicked: !isClicked,
    });
  };

  handleSearch = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    const { keyword } = this.state;

    return (
      <nav className="nav">
        <div className="nav_wrapper">
          <div className="nav_logo">
            <Link to="/Loginmjk">Westagram</Link>
          </div>
          <form className="nav_search">
            <input
              className="nav_input"
              type="text"
              placeholder="검색"
              onChange={this.handleSearch}
              value={keyword}
            />
            <i className="fas fa-search"></i>
            <i className="fas fa-times-circle"></i>
            <NavSearchResult keyword={keyword} />
          </form>
          <div className="nav_icons">
            <a href="https://www.instagram.com/1dookong/">
              <i className="fas fa-home"></i>
            </a>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <button onClick={this.handleActive} id="menu_btn">
              <img
                className="user_icon"
                alt="user_image"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/153202768_115175883902196_4352046445731283655_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QzOJwSC_IAEAX_p9gYd&edm=ABfd0MgAAAAA&ccb=7-4&oh=abf900abbebdc78b5cad188d3e64dd2e&oe=60A30CB7&_nc_sid=7bff83"
              />
              {this.state.isClicked && <UserMenu />}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
