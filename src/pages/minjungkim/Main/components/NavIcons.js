import React, { Component } from 'react';

class NavIcons extends Component {
  render() {
    return (
      <div className="nav_icons">
        <i className="fas fa-home"></i>
        <i className="far fa-paper-plane"></i>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <img
          className="user_icon"
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/153202768_115175883902196_4352046445731283655_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QzOJwSC_IAEAX_p9gYd&edm=ABfd0MgAAAAA&ccb=7-4&oh=abf900abbebdc78b5cad188d3e64dd2e&oe=60A30CB7&_nc_sid=7bff83"
          alt="user_image"
        />
      </div>
    );
  }
}

export default NavIcons;
