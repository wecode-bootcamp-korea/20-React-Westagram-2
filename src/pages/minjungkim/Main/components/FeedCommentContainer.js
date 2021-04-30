import React, { Component } from 'react';
import FeedComment from './FeedComment';

class FeedCommentContainer extends Component {
  render() {
    return (
      <ul className="feed_comment_container">
        <li className="feed_comment_list">
          <FeedComment />
          <div className="feed_controls">
            <span className="like_btn">
              <i className="far fa-heart"></i>
            </span>
            <span className="delete_btn">
              <i className="far fa-trash-alt"></i>
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default FeedCommentContainer;
