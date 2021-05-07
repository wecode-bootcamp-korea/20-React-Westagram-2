import React from 'react';
import FriendProfile from '../FriendProfile/FriendProfile';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="main-right">
        <div className="myProfile">
          <img
            alt="myProfile"
            src="https://i.pinimg.com/564x/f3/e7/5f/f3e75f3d25d14ec2cdd49ff6f21ffd37.jpg"
          />
          <div className="myProfile_name">
            <p className="myProfile_name_id">meow_meow</p>
            <p className="myProfile_name_introduce">고영희</p>
          </div>
        </div>
        <div className="friendRecommend">
          <div className="friendRecommend_description">
            <span className="friendRecommend_description_one">
              회원님을 위한 추천
            </span>
            <span className="friendRecommend_description_two">모두 보기</span>
          </div>
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
          <FriendProfile />
        </div>
      </aside>
    );
  }
}

export default Aside;
