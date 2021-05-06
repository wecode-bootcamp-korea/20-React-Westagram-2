import React, { Component } from 'react';

export class FeedOwner extends Component {
  render() {
    return (
      <div className="feed_header">
        <div className="feed_info">
          <img
            className="feed_avatar"
            alt="avatar"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/13549579_1658271794499223_201858282_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=CM5HpRn-bqcAX8rbCiu&edm=AP_V10EAAAAA&ccb=7-4&oh=8988dacbb422bf306fcda76c4391d97b&oe=60A26FDA&_nc_sid=4f375e"
          />
          <div className="feed_id">travellingthroughtheworld</div>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    );
  }
}

export default FeedOwner;
