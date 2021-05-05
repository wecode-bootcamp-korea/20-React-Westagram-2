import React, { Component } from 'react';
import Sidebox from './Sidebox.js';

class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <div className="user">
          <img
            className="user_img"
            alt="user-avatar"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/153202768_115175883902196_4352046445731283655_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QzOJwSC_IAEAX_p9gYd&edm=ABfd0MgAAAAA&ccb=7-4&oh=abf900abbebdc78b5cad188d3e64dd2e&oe=60A30CB7&_nc_sid=7bff83"
          />
          <div className="user_info">
            <div className="user_id">1dookong</div>
            <div className="user_name">토이푸들 | 강아지모델</div>
          </div>
        </div>
        <Sidebox title="스토리" />
        <Sidebox title="회원님을 위한 추천" />
        <div className="miscellaneous">
          소개.도움말.홍보 센터.API.채용
          정보.개인정보처리방침.약관.위치.인기계정.해시태그.언어
        </div>
        <footer>
          <i className="far fa-copyright"> 2021 WESTAGRAM FROM WECODE</i>
        </footer>
      </aside>
    );
  }
}

export default Aside;
