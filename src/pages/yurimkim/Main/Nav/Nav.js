import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProfilePage from './ProfilePage/ProfilePage';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="maxWidth">
          <div className="navLogo">
            <img alt="instagram" src="/images/yurimkim/instagram.png" />
            <span> | </span>
            <span className="logoText">Westagram</span>
          </div>
          <div className="bar">
            <i class="searchIcon fas fa-search"></i>
            <input className="search" type="text" placeholder="검색" />
          </div>
          <SearchBar />
          <ul className="navList">
            <li>
              <a href="#">
                <i class="far fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-heart"></i>
              </a>
            </li>
            <li className="profileImage">
              <a href="#">
                <img alt="profileImage" src="/images/yurimkim/profile.jpg" />
              </a>
            </li>
          </ul>
        </div>
        <ProfilePage />
      </nav>
    );
  }
}

export default Nav;
