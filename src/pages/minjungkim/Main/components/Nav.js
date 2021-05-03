import React, { Component } from 'react';
import NavSearchResult from './NavSearchResult';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav_logo">
          <Link to="/Loginmjk">Westagram</Link>
        </div>
        <form className="nav_search">
          <input className="nav_input" type="text" placeholder="검색" />
          <i className="fas fa-search"></i>
          <i className="fas fa-times-circle"></i>
          <NavSearchResult />
        </form>
        <div className="nav_icons">
          <a href="https://www.instagram.com/1dookong/">
            <i className="fas fa-home"></i>
          </a>

          <i className="far fa-paper-plane"></i>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <img
            className="user_icon"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/153202768_115175883902196_4352046445731283655_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QzOJwSC_IAEAX_p9gYd&edm=ABfd0MgAAAAA&ccb=7-4&oh=abf900abbebdc78b5cad188d3e64dd2e&oe=60A30CB7&_nc_sid=7bff83"
            alt="user_image"
          />
        </div>
        <ul className="user_menu">
          <li>
            <i className="far fa-user-circle"></i>
            프로필
          </li>
          <li>
            <i className="far fa-bookmark"></i>
            저장됨
          </li>
          <li>
            <i className="fas fa-cog"></i>
            설정
          </li>
          <li>로그아웃</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
