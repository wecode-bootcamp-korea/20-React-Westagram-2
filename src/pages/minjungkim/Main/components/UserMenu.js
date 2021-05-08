import React, { Component } from 'react';

export class UserMenu extends Component {
  render() {
    return (
      <ul className="menuModal">
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
    );
  }
}

export default UserMenu;
