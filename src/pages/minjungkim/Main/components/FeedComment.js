import React, { Component } from 'react';

class FeedComment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <li className="feed_comment_list">
        <div className="feed_comment">
          <span className="friend_id">1dookong</span>
          <span className="friend_comment">{comment}</span>
        </div>
        <div className="feed_controls">
          <span className="like_btn">
            <i className="far fa-heart"></i>
          </span>
          <span className="delete_btn">
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default FeedComment;
