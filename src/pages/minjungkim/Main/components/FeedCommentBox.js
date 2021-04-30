import React, { Component } from 'react';
import FeedCommentContainer from './FeedCommentContainer';
import FeedUserComment from './FeedUserComment';

export class FeedCommentBox extends Component {
  render() {
    return (
      <div className="feed_comment_box">
        <FeedUserComment />
        <FeedCommentContainer />
      </div>
    );
  }
}

export default FeedCommentBox;
