import React from 'react';
import './ProfilePage.scss';

export const PAGEINFO = [
  { id: 1, icon: <i class="far fa-user" />, content: '프로필' },
  { id: 2, icon: <i class="far fa-bookmark" />, content: '저장됨' },
  { id: 3, icon: <i class="fas fa-cog" />, content: '설정' },
];

class ProfilePage extends React.Component {
  render() {
    return (
      <div
        className="profilePage"
        style={{ display: this.props.handleShowPage && 'block' }}
      >
        <ul>
          {PAGEINFO.map(el => {
            return (
              <li key={el.id}>
                <a href="#" className="profilePageList">
                  {el.icon}
                  <p>{el.content}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="profilePageList">
          <a href="#">로그아웃</a>
        </p>
      </div>
    );
  }
}

export default ProfilePage;
