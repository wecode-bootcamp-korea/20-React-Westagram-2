import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="mainNav">
          <div className="mainNav_logo">
            <img
              alt="Instagram_Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            />
          </div>
          <div className="mainNav_search">
            <input type="text" placeholder="검색" />
          </div>
          <div className="mainNav_icons">
            <img
              alt="explore_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="heart_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="profile_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
