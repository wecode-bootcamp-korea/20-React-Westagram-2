import React, { Component } from 'react';

class FeedComment extends Component {
  static defaultProps = {
    name: '1dookong',
  };

  render() {
    const { value, name } = this.props;

    return (
      <li className="feed_comment_list">
        <div className="feed_comment">
          <span className="friend_id">{name}</span>
          <span className="friend_comment">{value}</span>
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
