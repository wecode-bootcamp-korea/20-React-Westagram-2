import React from 'react';
import './ProfilePage.scss';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profilePage">
        <ul>
          <li>
            <a href="#" className="profilePageList">
              <i class="far fa-user"></i>
              <p>프로필</p>
            </a>
          </li>
          <li>
            <a href="#" className="profilePageList">
              <i class="far fa-bookmark"></i>
              <p>저장됨</p>
            </a>
          </li>
          <li>
            <a href="#" className="profilePageList">
              <i class="fas fa-cog"></i>
              <p>설정</p>
            </a>
          </li>
        </ul>
        <p className="profilePageList">
          <a href="#">로그아웃</a>
        </p>
      </div>
    );
  }
}

export default ProfilePage;
