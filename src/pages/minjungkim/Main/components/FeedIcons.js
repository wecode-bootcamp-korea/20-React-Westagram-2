import React, { Component } from 'react';

export class FeedIcons extends Component {
  render() {
    return (
      <div className="feed_icons_row">
        <div className="feed_icons">
          <i className="fas fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>
        <i className="far fa-bookmark"></i>
      </div>
    );
  }
}

export default FeedIcons;
