import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user">
        <img
          className="user_img"
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/153202768_115175883902196_4352046445731283655_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QzOJwSC_IAEAX_p9gYd&edm=ABfd0MgAAAAA&ccb=7-4&oh=abf900abbebdc78b5cad188d3e64dd2e&oe=60A30CB7&_nc_sid=7bff83"
          alt="user-avatar"
        />
        <div className="user_info">
          <div className="user_id">1dookong</div>
          <div className="user_name">토이푸들|강아지모델</div>
        </div>
      </div>
    );
  }
}

export default User;
