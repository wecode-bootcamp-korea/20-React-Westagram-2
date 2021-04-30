import React from 'react';
import './FriendProfile.scss';

class FriendProfile extends React.Component {
  render() {
    return (
      <div className="friendProfile">
        <img
          alt="frineds_profile"
          src="https://i.pinimg.com/564x/f3/e7/5f/f3e75f3d25d14ec2cdd49ff6f21ffd37.jpg"
        />
        <div className="friendProfile_name">
          <p className="friendProfile_name_id">meow_!</p>
          <p className="freindProfile_name_description">안녕</p>
        </div>
      </div>
    );
  }
}

export default FriendProfile;
