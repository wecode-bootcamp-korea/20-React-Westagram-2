import React, { Component } from 'react';
import FeedComment from './FeedComment';
import FeedUserComment from './FeedUserComment';

export class FeedCommentBox extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="feed_comment_box">
        <FeedUserComment />
        <ul className="feed_comment_container">
          {comments.map(comment => (
            <FeedComment comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedCommentBox;
