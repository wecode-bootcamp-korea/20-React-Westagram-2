import React from 'react';
import './StoryBottomNav.scss';

class StoryBottomNav extends React.Component {
  render() {
    return (
      <nav className="StoryBottomNav">
        <ul>
          <li>
            <a href="https://about.instagram.com/">소개</a>
          </li>
          <li>
            <a href="https://help.instagram.com/">도움말</a>
          </li>
          <li>
            <a href="https://about.instagram.com/blog">홍보 센터</a>
          </li>
          <li>
            <a href="https://www.instagram.com/developer/">API</a>
          </li>
          <li>
            <a href="https://about.instagram.com/about-us/careers">채용정보</a>
          </li>
          <li>
            <a href="https://help.instagram.com/519522125107875">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="https://help.instagram.com/581066165581870">약관</a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/locations/">위치</a>
          </li>
          <li>
            <a href="https://www.instagram.com/directory/profiles/">
              인기 계정
            </a>
          </li>
        </ul>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
      </nav>
    );
  }
}

export default StoryBottomNav;
