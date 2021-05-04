import React, { Component } from 'react';
import FeedUserComment from './FeedUserComment';
import FeedComment from './FeedComment';

export class FeedCommentBox extends Component {
  render() {
    const { comments, text } = this.props;

    return (
      <div className="feed_comment_box">
        <FeedUserComment comments={text} />
        <ul className="feed_comment_container">
          {comments.map(comment => (
            <FeedComment
              key={comment.id}
              value={comment.value}
              name={comment.name}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedCommentBox;
